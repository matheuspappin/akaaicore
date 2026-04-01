"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Search, DollarSign, Camera, 
  Trash2, CreditCard, Banknote, QrCode, Loader2,
  Check, Coins
} from "lucide-react"
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter
} from "@/components/ui/dialog"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/actions/inventory"
import { processPosPayment, createPosStripeSession, getPdvCreditConversionRate, getStudentCredits } from "@/lib/actions/pos"
import { createPagBankPixOrder } from "@/lib/payment-gateway/pagbank-provider"
import { BarcodeScanner } from "@/components/dashboard/barcode-scanner"
import { OrganizationProvider } from "@/components/providers/organization-provider"
import { ModuleGuard } from "@/components/providers/module-guard"
import { useOrganization } from "@/components/providers/organization-provider"
import { useSearchParams, useRouter } from "next/navigation"

const DANCE_RETURN_PATH = '/solutions/yoga/dashboard/vendas'

function POSContent() {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { vocabulary, t, language, businessModel } = useOrganization()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [studioId, setStudioId] = useState<string | null>(null)
  const [pendingOS, setPendingOS] = useState<any[]>([])
  
  const [isScannerOpen, setIsScannerOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'money' | 'card' | 'pix' | 'pagbank_pix' | 'credit' | null>(null)
  
  const [cart, setCart] = useState<{product: any, quantity: number, type: 'product' | 'service_order'}[]>([])
  const [isFinalizingSale, setIsFinalizingSale] = useState(false)
  
  const [students, setStudents] = useState<any[]>([])
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null)
  
  const [pdvSearchInput, setPdvSearchInput] = useState("")
  const [osSearchInput, setOsSearchInput] = useState("")
  const [amountReceived, setAmountReceived] = useState<number>(0)
  const [change, setChange] = useState<number>(0)
  const [reaisPerCredit, setReaisPerCredit] = useState<number>(70)
  const [studentCredits, setStudentCredits] = useState<number | null>(null)
  const [customerTaxIdInput, setCustomerTaxIdInput] = useState<string>('')
  const [showTaxIdInput, setShowTaxIdInput] = useState<boolean>(false)
  const [pixQRCodeUrl, setPixQRCodeUrl] = useState<string | null>(null)
  const [pixText, setPixText] = useState<string | null>(null)
  
  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      toast({ title: "Pagamento confirmado!", description: "A venda foi processada com sucesso via Stripe." })
      setCart([])
      router.replace(DANCE_RETURN_PATH)
    } else if (searchParams.get('canceled') === 'true') {
      toast({ title: "Pagamento cancelado", description: "O pagamento via Stripe não foi concluído.", variant: "destructive" })
      router.replace(DANCE_RETURN_PATH)
    }
  }, [searchParams])

  useEffect(() => {
    const userStr = localStorage.getItem("danceflow_user")
    if (userStr) {
      const user = JSON.parse(userStr)
      setStudioId(user.studioId || user.studio_id)
    }
  }, [])

  useEffect(() => {
    if (studioId) fetchData()
  }, [studioId])

  useEffect(() => {
    if (studioId) getPdvCreditConversionRate(studioId).then(setReaisPerCredit)
  }, [studioId])

  useEffect(() => {
    if (isPaymentModalOpen && studioId && selectedStudentId && selectedStudentId !== 'none') {
      getStudentCredits(selectedStudentId, studioId).then(setStudentCredits)
    } else {
      setStudentCredits(null)
    }
  }, [isPaymentModalOpen, studioId, selectedStudentId])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [inventoryRes, studentsRes] = await Promise.all([
        fetch(`/api/dance-studio/inventory?studioId=${studioId}`).then(r => r.json()),
        fetch(`/api/dance-studio/students?studioId=${studioId}`).then(async r => {
          const data = await r.json()
          return r.ok && Array.isArray(data) ? data : []
        }),
      ])
      
      setProducts(inventoryRes?.products ?? [])
      setStudents(studentsRes)
      setPendingOS(inventoryRes?.pendingOS ?? [])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return `${language === 'en' ? '$' : 'R$'} ${price.toFixed(2)}`
  }

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.type === 'product')
      if (existing) {
        return prev.map(item => 
          (item.product.id === product.id && item.type === 'product') ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { product, quantity: 1, type: 'product' }]
    })
    toast({ title: "Adicionado", description: product.name })
  }

  const addOSToCart = (os: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === os.id && item.type === 'service_order')
      if (existing) return prev
      return [...prev, { 
        product: {
          id: os.id,
          name: `OS #${os.tracking_code} - ${os.customer?.name || 'Cliente'}`,
          selling_price: os.total_amount,
          price_in_credits: os.total_amount
        }, 
        quantity: 1, 
        type: 'service_order' 
      }]
    })
    if (os.customer_id) setSelectedStudentId(os.customer_id)
    toast({ title: "OS Adicionada", description: `#${os.tracking_code}` })
  }

  const handleFinalizeSale = async (forcedMethod?: 'money' | 'card' | 'pix' | 'pagbank_pix' | 'credit') => {
    console.log('handleFinalizeSale chamada!');
    const method = forcedMethod || paymentMethod || (businessModel === 'MONETARY' ? 'money' : 'credit');
    console.log('Método de pagamento:', method);

      if (method === 'pagbank_pix') {
        setShowTaxIdInput(true); // Exibir o campo de CPF/CNPJ
        if (!customerTaxIdInput) {
          toast({ title: "Informe o CPF ou CNPJ", variant: "destructive" });
          setIsFinalizingSale(false);
          return;
        }
      }
    
    if (!method) {
      toast({ title: "Selecione o pagamento", variant: "destructive" })
      return
    }
    
    setIsFinalizingSale(true)
    try {
      const priceInReais = (p: any) => p.selling_price ?? p.price_in_credits ?? 0
      const items = cart.map(item => {
        const unitPrice = priceInReais(item.product)
        const creditsPerUnit = method === 'credit' ? unitPrice / Math.max(0.01, reaisPerCredit) : ((item.product as any).price_in_credits ?? 0)
        return {
          id: item.product.id,
          name: item.product.name,
          priceInCredits: creditsPerUnit,
          priceInCurrency: unitPrice,
          quantity: item.quantity,
          type: item.type as any
        }
      })

      if (method === 'card') {
        const { url } = await createPosStripeSession(
          studioId!,
          selectedStudentId === 'none' ? null : selectedStudentId,
          items,
          method,
          window.location.origin,
          DANCE_RETURN_PATH
        )
        if (url) {
          window.location.href = url
          return 
        }
      } else if (method === 'pagbank_pix') {
        const totalAmount = cart.reduce((acc, i) => acc + ((i.product.selling_price ?? 0) * i.quantity), 0);
        const customerEmail = selectedStudentId && selectedStudentId !== 'none' 
          ? students.find(s => s.id === selectedStudentId)?.email || 'cliente@exemplo.com'
          : 'cliente.avulso@exemplo.com';

        const pagbankResponse = await createPagBankPixOrder(
          {
            customer: {
              name: selectedStudentId && selectedStudentId !== 'none' ? students.find(s => s.id === selectedStudentId)?.name : 'Cliente Avulso',
              email: customerEmail,
              tax_id: customerTaxIdInput || (selectedStudentId && selectedStudentId !== 'none' ? students.find(s => s.id === selectedStudentId)?.tax_id : undefined),
              phones: [{ country: '55', area: '11', number: '999999999', type: 'MOBILE' as const }],
            },
            items: items.map(item => ({
              name: item.name,
              quantity: item.quantity,
              unit_amount: Math.round(item.priceInCurrency * 100),
            })),
            qr_codes: [
              {
                amount: {
                  value: Math.round(totalAmount * 100),
                },
              },
            ],
          } as any
        );
        console.log('Resposta PagBank Pix Completa:', JSON.stringify(pagbankResponse, null, 2)); // Log para depuração profunda
        
          if (pagbankResponse.qr_codes && pagbankResponse.qr_codes.length > 0) {
            const qrCodeInfo = pagbankResponse.qr_codes[0];
            console.log('Informações do QR Code:', JSON.stringify(qrCodeInfo, null, 2)); // Log para depuração profunda
  
            if ((qrCodeInfo as any).links) {
               const qrCodeImageLink = (qrCodeInfo as any).links.find((link: any) => link.rel === 'QRCODE.PNG');
               if (qrCodeImageLink) {
                  setPixQRCodeUrl(qrCodeImageLink.href);
                  console.log('URL do QR Code (PNG):', qrCodeImageLink.href); // Log para depuração
               }
            } else if (qrCodeInfo.base64_image) {
                // PagBank sometimes returns a base64 encoded image instead of a link
                setPixQRCodeUrl(`data:image/png;base64,${qrCodeInfo.base64_image}`);
                console.log('Imagem do QR Code (Base64) gerada'); // Log para depuração
            }

            if (qrCodeInfo.text_code) {
               setPixText(qrCodeInfo.text_code);
               console.log('Código Pix Copia e Cola:', qrCodeInfo.text_code); // Log para depuração
            } else if ((qrCodeInfo as any).text) {
               setPixText((qrCodeInfo as any).text);
               console.log('Código Pix Copia e Cola:', (qrCodeInfo as any).text); // Log para depuração
            }
            toast({ title: 'Pix Gerado com Sucesso!', description: 'Leia o QR Code abaixo para pagar.' });
          } else {
            toast({ title: 'Aviso', description: 'Pedido gerado, mas QR Code não retornado.', variant: 'destructive' });
          }
        
        setIsFinalizingSale(false);
        return;
      }


      const result = await processPosPayment(
        studioId!,
        selectedStudentId === 'none' ? null : selectedStudentId,
        items,
        method
      )

      if (!result.success) throw new Error(result.message)

      toast({ title: t.common.success || "Venda finalizada!" })
      setCart([])
      setIsPaymentModalOpen(false)
      setPaymentMethod(null)
      setAmountReceived(0)
      setChange(0)
      setCustomerTaxIdInput('')
      setPixQRCodeUrl(null)
      setPixText(null)
      fetchData()
    } catch (error: any) {
      toast({ title: "Erro", description: error.message, variant: "destructive" })
    } finally {
      setIsFinalizingSale(false)
    }
  }

  return (
    <ModuleGuard module="pos" showFullError>
      <div className="min-h-screen bg-background flex flex-col">
        <Header title={`Ponto de Venda (PDV) - ${vocabulary.establishment}`} />
        
        <BarcodeScanner 
          isOpen={isScannerOpen} 
          onClose={() => setIsScannerOpen(false)} 
          onScanSuccess={async (sku) => {
            const r = await fetch(`/api/dance-studio/inventory?studioId=${studioId}&sku=${encodeURIComponent(sku)}`)
            const prod = r.ok ? await r.json() : null
            if (prod) addToCart(prod)
            else toast({ title: "Não encontrado", variant: "destructive" })
          }} 
        />

        <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border shadow-sm flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Pesquisar produto ou bipar SKU..." 
                  className="pl-9 h-12"
                  value={pdvSearchInput}
                  onChange={(e) => setPdvSearchInput(e.target.value)}
                />
              </div>
              <Button type="button" size="lg" className="h-12" onClick={() => setIsScannerOpen(true)}>
                <Camera className="w-5 h-5 mr-2" /> Escanear
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Produtos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin">
                {products.filter(p =>
                  p.quantity > 0 &&
                  (pdvSearchInput.trim() === '' ||
                    p.name?.toLowerCase().includes(pdvSearchInput.toLowerCase()) ||
                    p.sku?.toLowerCase().includes(pdvSearchInput.toLowerCase()))
                ).map(p => (
                  <Card key={p.id} className="hover:border-primary cursor-pointer transition-all" onClick={() => addToCart(p)}>
                    <CardContent className="p-4 text-center">
                      <p className="font-bold text-sm truncate">{p.name}</p>
                      <p className="text-primary font-bold">{formatPrice(p.selling_price)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {pendingOS.length > 0 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">OS Pendentes de Pagamento</h3>
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
                    <Input 
                      placeholder="Filtrar por nome ou código..." 
                      className="pl-7 h-8 text-xs"
                      value={osSearchInput}
                      onChange={(e) => setOsSearchInput(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                  {pendingOS
                    .filter(os => 
                      os.tracking_code?.toLowerCase().includes(osSearchInput.toLowerCase()) || 
                      os.customer?.name?.toLowerCase().includes(osSearchInput.toLowerCase())
                    )
                    .map(os => (
                      <Card key={os.id} className="hover:border-indigo-500 cursor-pointer border-l-4 border-l-indigo-500 transition-all" onClick={() => addOSToCart(os)}>
                        <CardContent className="p-4 flex justify-between items-center">
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm truncate">OS #{os.tracking_code}</p>
                            <p className="text-xs text-muted-foreground truncate">{os.customer?.name || 'Cliente Avulso'}</p>
                          </div>
                          <div className="text-right ml-4">
                            <p className="text-indigo-600 font-bold">{formatPrice(os.total_amount)}</p>
                            <Badge variant="outline" className="text-[10px] capitalize">{os.status.replace('_', ' ')}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            )}
          </div>

          <Card className="lg:col-span-4 flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex justify-between">
                <span>Carrinho</span>
                <Badge>{cart.length} itens</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              <Select onValueChange={setSelectedStudentId} value={selectedStudentId || ''}>
                <SelectTrigger><SelectValue placeholder="Vincular Aluno (Opcional)" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Venda Avulsa</SelectItem>
                  {students.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                </SelectContent>
              </Select>

              {cart.map(item => (
                <div key={item.product.id} className="flex justify-between items-center p-2 border rounded-lg">
                  <div className="flex-1 truncate mr-2">
                    <p className="font-medium text-sm truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">{formatPrice(item.product.selling_price)} x {item.quantity}</p>
                  </div>
                  <Button type="button" variant="ghost" size="icon" className="text-red-500" onClick={() => setCart(cart.filter(i => i.product.id !== item.product.id))}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
            <div className="p-4 border-t space-y-4">
              <div className="flex justify-between text-xl font-black">
                <span>TOTAL</span>
                <span>{formatPrice(cart.reduce((acc, i) => acc + (i.product.selling_price * i.quantity), 0))}</span>
              </div>
              <Button 
                className="w-full h-14 text-lg font-bold bg-green-600 hover:bg-green-700" 
                disabled={cart.length === 0 || isFinalizingSale}
                onClick={() => setIsPaymentModalOpen(true)}
              >
                {isFinalizingSale ? <Loader2 className="animate-spin mr-2" /> : <DollarSign className="w-6 h-6 mr-2" />}
                FECHAR VENDA
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Finalizar Venda</DialogTitle>
            <DialogDescription>Escolha a forma de pagamento e confirme a venda.</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="bg-muted p-4 rounded-lg space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total a pagar:</span>
                <span className="text-2xl font-black">{formatPrice(cart.reduce((acc, i) => acc + ((i.product.selling_price ?? 0) * i.quantity), 0))}</span>
              </div>
              {selectedStudentId && selectedStudentId !== 'none' && (
                <p className="text-xs text-muted-foreground">
                  Equivalente a {(cart.reduce((acc, i) => acc + ((i.product.selling_price ?? 0) * i.quantity) / reaisPerCredit, 0)).toFixed(2)} créditos (taxa R$ {reaisPerCredit.toFixed(0)}/crédito)
                </p>
              )}
            </div>

            <div className="grid gap-4">
              <Button type="button" variant={paymentMethod === 'money' ? 'default' : 'outline'} className="h-16 justify-start gap-4" onClick={() => setPaymentMethod('money')}>
                <Banknote className="w-8 h-8" /> Dinheiro
              </Button>
              <div className="flex flex-col gap-2">
                <Button type="button" variant={paymentMethod === 'pagbank_pix' ? 'default' : 'outline'} className="h-16 justify-start gap-4" onClick={() => setPaymentMethod('pagbank_pix')}>
                  <QrCode className="w-8 h-8" /> PIX (PagBank)
                </Button>
                {paymentMethod === 'pagbank_pix' && (
                  <div className="space-y-4 p-4 border rounded-xl bg-accent/50 animate-in fade-in slide-in-from-top-2">
                    {!pixQRCodeUrl ? (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="tax_id">CPF ou CNPJ (Obrigatório para Pix)</Label>
                          <Input
                            id="tax_id"
                            placeholder="000.000.000-00 ou 00.000.000/0000-00"
                            value={customerTaxIdInput}
                            onChange={(e) => setCustomerTaxIdInput(e.target.value.replace(/\D/g, ''))}
                            maxLength={14}
                          />
                        </div>
                        <Button type="button" className="w-full h-12 bg-green-600 hover:bg-green-700" onClick={() => handleFinalizeSale('pagbank_pix')} disabled={isFinalizingSale || !customerTaxIdInput}>
                          {isFinalizingSale ? <Loader2 className="animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                          Gerar PIX
                        </Button>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-4 py-4">
                        <p className="font-medium text-center">Escaneie o QR Code abaixo no seu aplicativo bancário</p>
                        <div className="bg-white p-4 rounded-xl">
                        {/* {console.log('Final pixQRCodeUrl for img src:', pixQRCodeUrl)} */} {/* Novo log de depuração */}
                           <img src={pixQRCodeUrl} alt="QR Code PIX PagBank" className="w-48 h-48 object-contain" />
                        </div>
                        {pixText && (
                          <div className="w-full space-y-2 mt-4">
                            <Label className="text-center block">Pix Copia e Cola:</Label>
                            <div className="flex gap-2">
                              <Input readOnly value={pixText} className="text-xs" />
                              <Button type="button" variant="outline" onClick={() => {
                                navigator.clipboard.writeText(pixText);
                                toast({ title: "Copiado!", description: "Código Pix copiado para a área de transferência." });
                              }}>Copiar</Button>
                            </div>
                          </div>
                        )}
                        <Button type="button" className="w-full mt-4" variant="outline" onClick={() => {
                           toast({ title: "Venda concluída", description: "Verifique o pagamento no extrato." });
                           setCart([])
                           setIsPaymentModalOpen(false)
                           setPaymentMethod(null)
                           setPixQRCodeUrl(null)
                           setPixText(null)
                           setCustomerTaxIdInput('')
                           fetchData()
                        }}>
                          Fechar (Pagamento Concluído)
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <Button type="button" variant={paymentMethod === 'card' ? 'default' : 'outline'} className="h-16 justify-start gap-4" onClick={() => setPaymentMethod('card')}>
                <CreditCard className="w-8 h-8" /> Cartão (Stripe)
              </Button>
              {paymentMethod === 'card' && (
                  <div className="space-y-4 p-4 border rounded-xl bg-accent/50 animate-in fade-in slide-in-from-top-2">
                    <Button type="button" className="w-full h-12 bg-blue-600 hover:bg-blue-700" onClick={() => handleFinalizeSale('card')} disabled={isFinalizingSale}>
                      {isFinalizingSale ? <Loader2 className="animate-spin mr-2" /> : <CreditCard className="w-4 h-4 mr-2" />}
                      Pagar com Cartão (Stripe)
                    </Button>
                  </div>
              )}
              {selectedStudentId && selectedStudentId !== 'none' && (
                <div className="space-y-2">
                  <Button
                    type="button"
                    variant={paymentMethod === 'credit' ? 'default' : 'outline'}
                    className="h-16 justify-start gap-4 w-full"
                    disabled={
                      isFinalizingSale ||
                      (studentCredits !== null && studentCredits < (cart.reduce((acc, i) => acc + ((i.product.selling_price ?? 0) * i.quantity) / reaisPerCredit, 0)))
                    }
                    onClick={() => setPaymentMethod('credit')}
                  >
                    <Coins className="w-8 h-8" />
                    <div className="flex flex-col items-start">
                      <span>Pagar com Créditos</span>
                      {studentCredits !== null && (
                        <span className="text-xs font-normal opacity-80">
                          Saldo: {studentCredits.toFixed(2)} créditos
                          {(studentCredits >= (cart.reduce((acc, i) => acc + ((i.product.selling_price ?? 0) * i.quantity) / reaisPerCredit, 0)))
                            ? ' (suficiente ✓)' : ' (insuficiente)'}
                        </span>
                      )}
                    </div>
                  </Button>
                  {paymentMethod === 'credit' && (
                    <div className="space-y-4 p-4 border rounded-xl bg-accent/50 animate-in fade-in slide-in-from-top-2">
                      <Button type="button" className="w-full h-12 bg-amber-500 hover:bg-amber-600" onClick={() => handleFinalizeSale('credit')} disabled={isFinalizingSale}>
                        {isFinalizingSale ? <Loader2 className="animate-spin mr-2" /> : <Coins className="w-4 h-4 mr-2" />}
                        Confirmar Pagamento com Créditos
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {paymentMethod === 'money' && (
              <div className="space-y-4 p-4 border rounded-xl bg-accent/50 animate-in fade-in slide-in-from-top-2">
                <div className="flex justify-between items-center">
                  <Label>Valor Recebido</Label>
                  <Input 
                    type="number" 
                    className="w-32 text-right font-bold" 
                    placeholder="0.00"
                    value={amountReceived || ''}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0
                      setAmountReceived(val)
                      const total = cart.reduce((acc, i) => acc + (i.product.selling_price * i.quantity), 0)
                      setChange(Math.max(0, val - total))
                    }}
                  />
                </div>
                {amountReceived > 0 && (
                  <div className="flex justify-between items-center text-sm font-bold text-green-600">
                    <span>Troco:</span>
                    <span>{formatPrice(change)}</span>
                  </div>
                )}
                <Button type="button" className="w-full h-12 bg-green-600 hover:bg-green-700" onClick={() => handleFinalizeSale('money')} disabled={isFinalizingSale}>
                  {isFinalizingSale ? <Loader2 className="animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                  Confirmar e Finalizar
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </ModuleGuard>
  )
}

export default function DanceStudioPOSPage() {
  return (
    <OrganizationProvider>
      <POSContent />
    </OrganizationProvider>
  )
}
