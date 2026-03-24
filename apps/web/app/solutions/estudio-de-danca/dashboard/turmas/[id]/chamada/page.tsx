"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle,
  Loader2,
  Save,
  Users,
  Calendar as CalendarIcon,
  Banknote,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"
import { createCreditUsagePayment } from "@/lib/actions/credit-payments"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function DanceFlowAttendancePage() {
  const { id } = useParams() as { id: string }
  const router = useRouter()
  const { toast } = useToast()
  
  const [adminData, setAdminData] = useState<any>(null)
  const [classInfo, setClassInfo] = useState<any>(null)
  const [students, setStudents] = useState<any[]>([])
  const [attendance, setAttendance] = useState<Record<string, string>>({})
  const [prevAttendance, setPrevAttendance] = useState<Record<string, string>>({})
  const [contentTaught, setContentTaught] = useState("")
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [currentSession, setCurrentSession] = useState<any>(null)
  const [businessModel, setBusinessModel] = useState<'CREDIT' | 'MONETARY'>('MONETARY')
  const [teacherLessonAmount, setTeacherLessonAmount] = useState<number | null>(null)
  const [confirmCloseOpen, setConfirmCloseOpen] = useState(false)

  useEffect(() => {
    loadAttendanceData()
  }, [id])

  const loadAttendanceData = async () => {
    try {
      setLoading(true)
      const userStr = localStorage.getItem("danceflow_user")
      if (!userStr) {
        router.push("/solutions/estudio-de-danca/login")
        return
      }

      const user = JSON.parse(userStr)
      setAdminData(user)

      // Carregar informações da turma
      const { data: classData, error: classError } = await supabase
        .from('classes')
        .select('*')
        .eq('id', id)
        .single()

      if (classError || !classData) {
        toast({
          title: "Turma não encontrada",
          description: "Não foi possível carregar as informações da turma.",
          variant: "destructive"
        })
        router.push("/solutions/estudio-de-danca/dashboard/turmas")
        return
      }

      setClassInfo(classData)

      // Carregar business model
      const { data: studio } = await supabase
        .from('studios')
        .select('business_model')
        .eq('id', classData.studio_id)
        .single()
      setBusinessModel(studio?.business_model || 'MONETARY')

      const { data: orgRow } = await supabase
        .from('organization_settings')
        .select('theme_config')
        .eq('studio_id', classData.studio_id)
        .maybeSingle()
      const tc = (orgRow?.theme_config || {}) as {
        teacher_compensation_amount?: number
        teacher_compensation_overrides?: Record<string, number>
      }
      const pid = classData.professional_id as string | null
      const overrides = tc.teacher_compensation_overrides || {}
      const resolved =
        pid && overrides[String(pid)] != null && overrides[String(pid)] !== undefined
          ? Number(overrides[String(pid)])
          : Number(tc.teacher_compensation_amount) || 0
      setTeacherLessonAmount(Number.isFinite(resolved) ? resolved : 0)

      // Matrículas na turma (tabela `enrollments` — alinhada com /api/dance-studio/classes e enrollments)
      const { data: enrollments, error: enrollmentsError } = await supabase
        .from('enrollments')
        .select(`
          student_id,
          students (
            id,
            name,
            email,
            student_lesson_credits (
              remaining_credits,
              total_credits,
              expiry_date
            )
          )
        `)
        .eq('class_id', id)
        .eq('studio_id', classData.studio_id)
        .eq('status', 'active')

      if (enrollmentsError) {
        console.error('Chamada: erro ao carregar matrículas', enrollmentsError)
      }

      const mapStudentRow = (st: {
        id?: string
        name?: string
        email?: string
        student_lesson_credits?: Array<{
          remaining_credits?: number
          total_credits?: number
          expiry_date?: string
        }>
      } | null) => {
        if (!st?.id) return null
        const cred = st.student_lesson_credits?.[0]
        return {
          ...st,
          credits: cred?.remaining_credits || 0,
          totalCredits: cred?.total_credits || 0,
          expiryDate: cred?.expiry_date,
        }
      }

      const enrolledStudents = (enrollments || [])
        .map((e) => mapStudentRow(e.students as Parameters<typeof mapStudentRow>[0]))
        .filter(Boolean) as any[]

      const today = new Date().toISOString().split('T')[0]
      const { data: attendanceData } = await supabase
        .from('attendance')
        .select('*')
        .eq('class_id', id)
        .eq('date', today)

      const enrolledIds = new Set(enrolledStudents.map((s) => s.id))
      const orphanIds = [
        ...new Set(
          (attendanceData || [])
            .map((a) => a.student_id)
            .filter((sid: string | null) => Boolean(sid) && !enrolledIds.has(sid as string))
        ),
      ] as string[]

      let mergedStudents = [...enrolledStudents]
      if (orphanIds.length > 0) {
        const { data: extras } = await supabase
          .from('students')
          .select(`
            id,
            name,
            email,
            student_lesson_credits (
              remaining_credits,
              total_credits,
              expiry_date
            )
          `)
          .eq('studio_id', classData.studio_id)
          .in('id', orphanIds)

        const extraRows = (extras || [])
          .map((row) => mapStudentRow(row as Parameters<typeof mapStudentRow>[0]))
          .filter(Boolean) as any[]
        mergedStudents = [...mergedStudents, ...extraRows]

        const foundExtra = new Set(extraRows.map((r: { id: string }) => r.id))
        for (const sid of orphanIds) {
          if (foundExtra.has(sid)) continue
          mergedStudents.push({
            id: sid,
            name: 'Aluno (só presença de hoje)',
            email: '',
            credits: 0,
            totalCredits: 0,
            expiryDate: undefined,
          })
        }
      }

      mergedStudents.sort((a, b) =>
        String(a.name || '').localeCompare(String(b.name || ''), 'pt-BR')
      )
      setStudents(mergedStudents)

      const attendanceMap: Record<string, string> = {}
      const notesMap: Record<string, string> = {}

      attendanceData?.forEach((record) => {
        attendanceMap[record.student_id] = record.status
        notesMap[record.student_id] = record.notes || ''
      })

      setAttendance(attendanceMap)
      setPrevAttendance(attendanceMap)
      setStudentNotes(notesMap)

      // Criar session se não existir
      const { data: sessionData } = await supabase
        .from('sessions')
        .select('*')
        .eq('class_id', id)
        .eq('date', today)
        .single()

      if (!sessionData) {
        const { data: newSession } = await supabase
          .from('sessions')
          .insert({
            studio_id: classData.studio_id,
            class_id: id,
            scheduled_date: today,
            date: today,
            actual_professional_id: classData.professional_id || null,
            status: 'agendada',
            content_taught: ''
          })
          .select()
          .single()
        setCurrentSession(newSession)
      } else {
        setCurrentSession(sessionData)
        setContentTaught(sessionData.content_taught || '')
      }

    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      toast({
        title: "Erro ao carregar",
        description: "Não foi possível carregar os dados da chamada.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAttendanceChange = (studentId: string, status: string) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }))
  }

  const handleNotesChange = (studentId: string, notes: string) => {
    setStudentNotes(prev => ({ ...prev, [studentId]: notes }))
  }

  /** Persiste linhas de presença e efeitos de crédito; devolve contagem de presentes para a sessão. */
  const persistAttendanceAndCredits = async (): Promise<number> => {
    if (!currentSession || !classInfo) throw new Error("Sessão inválida")

    const today = new Date().toISOString().split('T')[0]

    for (const student of students) {
      const currentStatus = attendance[student.id] || 'absent'
      const previousStatus = prevAttendance[student.id] || 'absent'
      const notes = studentNotes[student.id] || ''

      if (currentStatus !== previousStatus) {
        const { data: existingRecord } = await supabase
          .from('attendance')
          .select('*')
          .eq('class_id', id)
          .eq('student_id', student.id)
          .eq('date', today)
          .single()

        if (existingRecord) {
          await supabase
            .from('attendance')
            .update({
              status: currentStatus,
              notes,
              session_id: currentSession.id,
            })
            .eq('id', existingRecord.id)
        } else {
          await supabase.from('attendance').insert({
            class_id: id,
            student_id: student.id,
            date: today,
            status: currentStatus,
            notes,
            session_id: currentSession.id,
          })
        }

        if (businessModel === 'CREDIT' && currentStatus === 'present' && previousStatus !== 'present') {
          const { data: credits } = await supabase
            .from('student_lesson_credits')
            .select('*')
            .eq('student_id', student.id)
            .eq('studio_id', classInfo.studio_id)
            .maybeSingle()

          if (credits && credits.remaining_credits > 0) {
            const expiryDate = credits.expiry_date ? new Date(credits.expiry_date) : null
            const todayDate = new Date()
            todayDate.setHours(0, 0, 0, 0)

            if (expiryDate && expiryDate < todayDate) {
              toast({
                title: "Créditos congelados",
                description: `${student.name} tem créditos expirados.`,
                variant: "destructive",
              })
              continue
            }

            await supabase
              .from('student_lesson_credits')
              .update({
                remaining_credits: credits.remaining_credits - 1,
                updated_at: new Date().toISOString(),
              })
              .eq('id', credits.id)

            await supabase.from('student_credit_usage').insert({
              studio_id: classInfo.studio_id,
              student_id: student.id,
              class_id: id,
              session_id: currentSession.id,
              credits_used: 1,
              usage_type: 'class_attendance',
              notes: `Presença em ${classInfo.name} (Registrado pela Admin)`,
            })

            await createCreditUsagePayment({
              studioId: classInfo.studio_id,
              studentId: student.id,
              description: `Aula: ${classInfo.name}`,
              creditsUsed: 1,
              paymentSource: 'class',
              referenceId: id,
            })

            if (credits.remaining_credits - 1 <= 2) {
              fetch('/api/whatsapp/notify-low-credits', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  studentId: student.id,
                  studioId: classInfo.studio_id,
                  remainingCredits: credits.remaining_credits - 1,
                  clientName: student.name,
                  establishmentName: adminData?.studioName || 'Estúdio',
                }),
              }).catch(() => {})
            }
          }
        }

        if (businessModel === 'CREDIT' && currentStatus !== 'present' && previousStatus === 'present') {
          const { data: credits } = await supabase
            .from('student_lesson_credits')
            .select('*')
            .eq('student_id', student.id)
            .eq('studio_id', classInfo.studio_id)
            .maybeSingle()

          if (credits) {
            await supabase
              .from('student_lesson_credits')
              .update({
                remaining_credits: Math.min(credits.remaining_credits + 1, credits.total_credits),
                updated_at: new Date().toISOString(),
              })
              .eq('id', credits.id)

            await supabase.from('student_credit_usage').insert({
              studio_id: classInfo.studio_id,
              student_id: student.id,
              class_id: id,
              session_id: currentSession.id,
              credits_used: -1,
              usage_type: 'refund',
              notes: `Estorno de presença em ${classInfo.name} (Registrado pela Admin)`,
            })
          }
        }
      }
    }

    const presentCount = Object.values(attendance).filter(
      (s) => s === 'present' || s === 'confirmed'
    ).length
    return presentCount
  }

  /** Grava presenças e conteúdo sem encerrar a sessão (não gera lançamento ao professor). */
  const savePresencasOnly = async () => {
    if (!currentSession) return

    setSaving(true)
    try {
      const presentCount = await persistAttendanceAndCredits()
      const keepRealizada = currentSession.status === 'realizada'
      const payload: Record<string, unknown> = {
        content_taught: contentTaught,
        attendance_count: presentCount,
      }
      if (classInfo?.professional_id) {
        payload.actual_professional_id = classInfo.professional_id
      }
      if (!keepRealizada) {
        payload.status = 'agendada'
      }

      await supabase.from('sessions').update(payload).eq('id', currentSession.id)

      setPrevAttendance({ ...attendance })
      setCurrentSession((prev: any) =>
        prev ? { ...prev, ...payload, status: keepRealizada ? 'realizada' : 'agendada' } : prev
      )

      toast({
        title: "Presenças guardadas",
        description: keepRealizada
          ? "Dados atualizados (aula já estava encerrada)."
          : "Pode encerrar a aula quando quiser registar o honorário ao professor.",
      })
    } catch (error) {
      console.error('Erro ao salvar chamada:', error)
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível guardar as presenças.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  /** Encerra a sessão como realizada — dispara geração de pagamento ao professor (trigger). */
  const confirmEncerrarSessao = async () => {
    if (!currentSession) return
    if (currentSession.status === 'realizada') {
      toast({
        title: "Aula já encerrada",
        description: "O honorário desta sessão já foi registado.",
      })
      setConfirmCloseOpen(false)
      return
    }

    setSaving(true)
    try {
      const presentCount = await persistAttendanceAndCredits()
      await supabase
        .from('sessions')
        .update({
          content_taught: contentTaught,
          status: 'realizada',
          attendance_count: presentCount,
          ...(classInfo?.professional_id && { actual_professional_id: classInfo.professional_id }),
        })
        .eq('id', currentSession.id)

      setPrevAttendance({ ...attendance })
      setCurrentSession((prev: any) =>
        prev
          ? {
              ...prev,
              content_taught: contentTaught,
              status: 'realizada',
              attendance_count: presentCount,
            }
          : prev
      )
      setConfirmCloseOpen(false)

      toast({
        title: "Aula encerrada",
        description: "Sessão registada como realizada — o honorário ao professor será gerado conforme a configuração.",
      })
    } catch (error) {
      console.error('Erro ao encerrar aula:', error)
      toast({
        title: "Erro ao encerrar",
        description: "Não foi possível encerrar a aula.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-violet-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header title="Chamada" />
      
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="mb-6">
          <Link href="/solutions/estudio-de-danca/dashboard/turmas">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Turmas
            </Button>
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Chamada - {classInfo?.name}
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                {new Date().toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-violet-100 text-violet-700">
                {students.length === 0
                  ? "Sem alunos na lista"
                  : students.length === 1
                    ? "1 aluno na lista"
                    : `${students.length} alunos na lista`}
              </Badge>
              {currentSession?.status === 'realizada' ? (
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                  Aula encerrada — honorário registado
                </Badge>
              ) : (
                <Badge variant="outline" className="border-amber-300 text-amber-900 dark:text-amber-100">
                  Aula em aberto — falta encerrar para gerar pagamento ao professor
                </Badge>
              )}
              {businessModel === 'CREDIT' && (
                <Badge className="bg-indigo-100 text-indigo-700">
                  Modelo por créditos
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de alunos */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Lista de Presença
                </CardTitle>
                <CardDescription>
                  Marque a presença dos alunos na aula de hoje
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-violet-100 text-violet-600">
                            {student.name?.[0]?.toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          {businessModel === 'CREDIT' && (
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {student.credits} créditos
                              </Badge>
                              {student.credits === 0 && (
                                <Badge variant="destructive" className="text-xs">
                                  Sem créditos
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant={attendance[student.id] === 'present' ? 'default' : 'outline'}
                          className={cn(
                            "rounded-full",
                            attendance[student.id] === 'present' 
                              ? "bg-emerald-600 hover:bg-emerald-700" 
                              : "hover:bg-emerald-50"
                          )}
                          onClick={() => handleAttendanceChange(student.id, 'present')}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </Button>
                        
                        <Button
                          size="sm"
                          variant={attendance[student.id] === 'absent' ? 'default' : 'outline'}
                          className={cn(
                            "rounded-full",
                            attendance[student.id] === 'absent' 
                              ? "bg-rose-600 hover:bg-rose-700" 
                              : "hover:bg-rose-50"
                          )}
                          onClick={() => handleAttendanceChange(student.id, 'absent')}
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Painel lateral */}
          <div className="space-y-6">
            {/* Conteúdo da aula */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Conteúdo da Aula
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="O que foi ensinado hoje?"
                  value={contentTaught}
                  onChange={(e) => setContentTaught(e.target.value)}
                  className="mb-4"
                />
              </CardContent>
            </Card>

            {/* Resumo */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo da Chamada</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Presentes:</span>
                    <span className="font-bold text-emerald-600">
                      {Object.values(attendance).filter(s => s === 'present' || s === 'confirmed').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ausentes:</span>
                    <span className="font-bold text-rose-600">
                      {Object.values(attendance).filter(s => s === 'absent').length}
                    </span>
                  </div>
                  {businessModel === 'CREDIT' && (
                    <div className="flex justify-between">
                      <span>Créditos usados:</span>
                      <span className="font-bold text-indigo-600">
                        {Object.values(attendance).filter(s => s === 'present' || s === 'confirmed').length}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  <strong className="text-slate-800 dark:text-slate-200">Guardar presenças</strong> apenas
                  grava a lista e o conteúdo. O pagamento ao professor só é gerado quando{" "}
                  <strong className="text-slate-800 dark:text-slate-200">encerra a aula</strong> abaixo.
                </p>

                {teacherLessonAmount === 0 && (
                  <div className="mt-3 flex gap-2 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>
                      Valor por aula está em <strong>R$ 0,00</strong>. Configure em{" "}
                      <Link
                        href="/solutions/estudio-de-danca/dashboard/pagamentos-professores"
                        className="font-medium underline underline-offset-2"
                      >
                        Pagamentos Professores
                      </Link>
                      .
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    type="button"
                    onClick={savePresencasOnly}
                    disabled={saving}
                    variant="outline"
                    className="w-full"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        A guardar…
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Guardar presenças
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setConfirmCloseOpen(true)}
                    disabled={saving || currentSession?.status === 'realizada'}
                    className="w-full bg-violet-600 hover:bg-violet-700"
                  >
                    <Banknote className="w-4 h-4 mr-2" />
                    Encerrar aula e registar honorário
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <AlertDialog open={confirmCloseOpen} onOpenChange={setConfirmCloseOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Encerrar aula e registar para pagamento?</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Ao confirmar, a sessão de hoje fica <strong>realizada</strong> e o sistema gera o
                  lançamento de honorário ao professor (conforme valor por aula nas definições).
                </p>
                {teacherLessonAmount === 0 && (
                  <p className="flex gap-2 rounded-md border border-amber-200 bg-amber-50 p-3 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100">
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    <span>
                      O valor por aula está em zero.{" "}
                      <Link
                        href="/solutions/estudio-de-danca/dashboard/pagamentos-professores"
                        className="font-medium text-foreground underline underline-offset-2"
                        onClick={() => setConfirmCloseOpen(false)}
                      >
                        Configurar em Pagamentos Professores
                      </Link>{" "}
                      antes de encerrar, se pretender um pagamento correto.
                    </span>
                  </p>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={saving}>Cancelar</AlertDialogCancel>
            <Button
              type="button"
              onClick={() => void confirmEncerrarSessao()}
              disabled={saving}
              className="bg-violet-600 hover:bg-violet-700"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
                  A processar…
                </>
              ) : (
                "Sim, encerrar e registar"
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
