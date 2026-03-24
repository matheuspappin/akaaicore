import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { supabaseAdmin } from "@/lib/supabase-admin"
import {
  createTeacherStripeConnectAccountLink,
  getTeacherStripeConnectStatus,
} from "@/lib/actions/teacher-stripe-connect"
import logger from "@/lib/logger"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

function createSSRClient(request: NextRequest) {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get: (n: string) => request.cookies.get(n)?.value,
      set: () => undefined,
      remove: () => undefined,
    },
  })
}

/** GET ?professionalId= — status Connect (professor ou admin do estúdio) */
export async function GET(request: NextRequest) {
  const supabase = createSSRClient(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const professionalId = searchParams.get("professionalId")

  let pid = professionalId
  if (!pid) {
    const { data: prof } = await supabaseAdmin
      .from("professionals")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle()
    pid = prof?.id ?? null
  }

  if (!pid) return NextResponse.json({ error: "professionalId obrigatório" }, { status: 400 })

  const { data: prof } = await supabaseAdmin
    .from("professionals")
    .select("id, user_id, studio_id")
    .eq("id", pid)
    .single()

  if (!prof) return NextResponse.json({ error: "Professor não encontrado" }, { status: 404 })

  if (prof.user_id !== user.id) {
    const { data: ui } = await supabaseAdmin
      .from("users_internal")
      .select("id")
      .eq("id", user.id)
      .eq("studio_id", prof.studio_id)
      .maybeSingle()
    const { data: st } = await supabaseAdmin
      .from("studios")
      .select("owner_id")
      .eq("id", prof.studio_id)
      .single()
    if (!ui && st?.owner_id !== user.id && user.user_metadata?.role !== "super_admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 })
    }
  }

  try {
    const status = await getTeacherStripeConnectStatus(pid)
    return NextResponse.json(status)
  } catch (e: any) {
    logger.error("[teacher-stripe-connect GET]", e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

/** POST { professionalId?, returnUrl } — URL de onboarding */
export async function POST(request: NextRequest) {
  const supabase = createSSRClient(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })

  try {
    const body = await request.json()
    const { professionalId: bodyPid, returnUrl } = body as { professionalId?: string; returnUrl?: string }

    let pid = bodyPid
    if (!pid) {
      const { data: prof } = await supabaseAdmin
        .from("professionals")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle()
      pid = prof?.id
    }

    if (!pid || !returnUrl?.trim()) {
      return NextResponse.json({ error: "professionalId e returnUrl obrigatórios" }, { status: 400 })
    }

    const url = await createTeacherStripeConnectAccountLink({
      professionalId: pid,
      userId: user.id,
      returnUrl: returnUrl.trim(),
      allowStudioAdmin: true,
    })

    return NextResponse.json({ url })
  } catch (e: any) {
    logger.error("[teacher-stripe-connect POST]", e)
    return NextResponse.json({ error: e.message || "Erro ao criar link" }, { status: 500 })
  }
}
