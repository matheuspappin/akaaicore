"use client"

import { useState, useEffect, useCallback, useRef, useMemo } from "react"
import { Header } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, Search, Package, TrendingUp, AlertTriangle, 
  Archive, Camera, MoreHorizontal, Trash2, Edit2, Loader2, RefreshCw
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { 
  getInventory, createProduct, registerTransaction, getRecentTransactions, Product, Transaction, getProductBySku, updateProduct, deleteProduct
} from "@/lib/actions/inventory"
import { BarcodeScanner } from "@/components/dashboard/barcode-scanner"
import { searchLocalCatalog, searchCatalog, getProductByBarcodeFromCatalog, type CatalogSearchResult } from "@/lib/constants/global-skus"
import { searchNcm, type Ncm } from "@/lib/services/brasil-api"
import { validateGTIN } from "@/lib/validation-utils"
import { formatMoneyBr, parseMoneyInput } from "@/lib/money-format"
import { ModuleGuard } from "@/components/providers/module-guard"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { useVocabulary } from "@/hooks/use-vocabulary"
import { useOrganization } from "@/components/providers/organization-provider"
import { EntityPicker } from "@/components/inventory/entity-picker"

export default function InventoryPage() {
  const { toast } = useToast()
  const { vocabulary, t, language } = useVocabulary()
  const { studioId: orgStudioId } = useOrganization()
  const [products, setProducts] = useState<Product[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [stats, setStats] = useState({ totalItems: 0, totalSalesValue: 0, potentialProfit: 0 })
  const [loading, setLoading] = useState(true)
  const [studioId, setStudioId] = useState<string | null>(null)
  
  // Modais
  const [isNewProductOpen, setIsNewProductOpen] = useState(false)
  const [isTransactionOpen, setIsTransactionOpen] = useState(false)
  const [transactionType, setTransactionType] = useState<'in' | 'out' | 'adjustment'>('in')
  const [selectedProduct, setSelectedProduct] = useState<string>("")
  const [isScannerOpen, setIsScannerOpen] = useState(false)
  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<string | null>(null)
  
  // Categorias e subcategorias (ex.: Bebidas → Red Bull)
  const [customCategories, setCustomCategories] = useState<string[]>([])
  const [customSubcategoriesByCategory, setCustomSubcategoriesByCategory] = useState<Record<string, string[]>>({})
  const defaultCategories = ["Bebidas", "Alimentos", "Acessórios", "Uniformes", "Equipamentos", "Suplementos", "Geral"]
  const allCategories = Array.from(new Set([
    ...defaultCategories,
    ...products.map(p => p.category).filter(Boolean),
    ...customCategories
  ])).sort()
  
  // Busca
  const [searchInput, setSearchInput] = useState("")

  // Formulários
  const [newProduct, setNewProduct] = useState({ 
    name: "", 
    category: "Geral", 
    subcategory: "",
    min_quantity: 5, 
    quantity: 0, 
    cost_price: 0, 
    selling_price: 0, 
    sku: "", 
    ncm: "",
    show_in_marketplace: true 
  })

  const allSubcategoriesForNew = useMemo(() => {
    const cat = newProduct.category
    const fromProducts = [...new Set(
      products
        .filter(p => p.category === cat && p.subcategory)
        .map(p => String(p.subcategory).trim())
        .filter(Boolean)
    )]
    const custom = customSubcategoriesByCategory[cat] || []
    return Array.from(new Set([...fromProducts, ...custom])).sort((a, b) => a.localeCompare(b, "pt-BR"))
  }, [newProduct.category, products, customSubcategoriesByCategory])

  const allSubcategoriesForEdit = useMemo(() => {
    const cat = editingProduct?.category
    if (!cat) return []
    const fromProducts = [...new Set(
      products
        .filter(p => p.category === cat && p.subcategory)
        .map(p => String(p.subcategory).trim())
        .filter(Boolean)
    )]
    const custom = customSubcategoriesByCategory[cat] || []
    return Array.from(new Set([...fromProducts, ...custom])).sort((a, b) => a.localeCompare(b, "pt-BR"))
  }, [editingProduct?.category, products, customSubcategoriesByCategory])
  const [catalogSearchQuery, setCatalogSearchQuery] = useState("")
  const [catalogResults, setCatalogResults] = useState<CatalogSearchResult[]>([])
  const [catalogSearching, setCatalogSearching] = useState(false)
  const [showCatalogResults, setShowCatalogResults] = useState(false)
  const [ncmSearchQuery, setNcmSearchQuery] = useState("")
  const [ncmResults, setNcmResults] = useState<Ncm[]>([])
  const [showNcmResults, setShowNcmResults] = useState(false)
  const [transactionData, setTransactionData] = useState({ quantity: 1, reason: "", costPrice: 0 })

  // Resolver studioId: OrganizationProvider (workflow_pro) ou localStorage (legado)
  useEffect(() => {
    if (orgStudioId) {
      setStudioId(orgStudioId)
      return
    }
    let resolved: string | null = null
    const userStr = localStorage.getItem("danceflow_user")
    if (userStr) {
      try {
        const user = JSON.parse(userStr)
        resolved = user.studioId || user.studio_id || null
      } catch {
        // ignore
      }
    }
    if (!resolved) {
      resolved = localStorage.getItem("workflow_pro_active_studio")
    }
    setStudioId(resolved)
  }, [orgStudioId])

  useEffect(() => {
    if (studioId) fetchData()
  }, [studioId])

  const fetchData = async () => {
    setLoading(true)
    try {
      const inventory = await getInventory(studioId!)
      const history = await getRecentTransactions(studioId!)
      
      setProducts(inventory.products)
      setStats(inventory.stats as any)
      setTransactions(history)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return `${language === 'en' ? '$' : 'R$'} ${price.toFixed(2)}`
  }

  const roundMoney = (n: number) => (Number.isFinite(n) ? Math.round(n * 100) / 100 : 0)

  /** Rascunho local para permitir vírgula decimal e digitação sem “pular” o valor. */
  const [newProductMoneyDrafts, setNewProductMoneyDrafts] = useState({
    cost: null as string | null,
    markup: null as string | null,
    selling: null as string | null,
    profit: null as string | null,
  })

  const [editProductMoneyDrafts, setEditProductMoneyDrafts] = useState({
    cost: null as string | null,
    markup: null as string | null,
    selling: null as string | null,
    profit: null as string | null,
  })

  /** Markup % sobre o custo (quando custo > 0). */
  const markupFromCostSelling = (cost: number, selling: number) =>
    cost > 0 ? roundMoney(((selling - cost) / cost) * 100) : 0
  const profitFromCostSelling = (cost: number, selling: number) =>
    roundMoney(selling - cost)

  const handleNewProductCostChange = (raw: string) => {
    const cost = parseMoneyInput(raw)
    setNewProduct(prev => ({ ...prev, cost_price: cost }))
  }

  /** Referência: markup % — receita = custo × (1 + markup/100). */
  const handleNewProductMarkupChange = (raw: string) => {
    const markupPct = parseMoneyInput(raw)
    setNewProduct(prev => {
      const cost = prev.cost_price
      const selling = roundMoney(cost * (1 + markupPct / 100))
      return { ...prev, selling_price: selling }
    })
  }

  /** Referência: receita (preço de venda) — lucro e markup derivam do custo. */
  const handleNewProductSellingChange = (raw: string) => {
    const selling = parseMoneyInput(raw)
    setNewProduct(prev => ({ ...prev, selling_price: selling }))
  }

  /** Referência: lucro unitário — receita = custo + lucro. */
  const handleNewProductProfitChange = (raw: string) => {
    const profit = parseMoneyInput(raw)
    setNewProduct(prev => {
      const cost = prev.cost_price
      const selling = roundMoney(cost + profit)
      return { ...prev, selling_price: selling }
    })
  }

  const handleEditProductCostChange = (raw: string) => {
    const cost = parseMoneyInput(raw)
    setEditingProduct(prev => prev ? { ...prev, cost_price: cost } : null)
  }

  const handleEditProductMarkupChange = (raw: string) => {
    const markupPct = parseMoneyInput(raw)
    setEditingProduct(prev => {
      if (!prev) return null
      const cost = prev.cost_price
      const selling = roundMoney(cost * (1 + markupPct / 100))
      return { ...prev, selling_price: selling }
    })
  }

  const handleEditProductSellingChange = (raw: string) => {
    const selling = parseMoneyInput(raw)
    setEditingProduct(prev => prev ? { ...prev, selling_price: selling } : null)
  }

  const handleEditProductProfitChange = (raw: string) => {
    const profit = parseMoneyInput(raw)
    setEditingProduct(prev => {
      if (!prev) return null
      const cost = prev.cost_price
      const selling = roundMoney(cost + profit)
      return { ...prev, selling_price: selling }
    })
  }

  const handleCreateProduct = async () => {
    if (!studioId) {
      toast({ title: "Erro", description: "Nenhum estúdio selecionado. Faça login novamente.", variant: "destructive" })
      return
    }
    if (!newProduct.name?.trim()) {
      toast({ title: "Campo obrigatório", description: "Informe o nome do produto.", variant: "destructive" })
      return
    }

    if (newProduct.sku?.trim()) {
      const existing = await getProductBySku(newProduct.sku.trim(), studioId)
      if (existing) {
        if (confirm(`O produto "${existing.name}" já está cadastrado com este SKU.\n\nDeseja adicionar estoque a ele ao invés de criar um novo?`)) {
          setIsNewProductOpen(false)
          setSelectedProduct(existing.id)
          setTransactionType('in')
          setTransactionData({ 
            quantity: newProduct.quantity || 1, 
            reason: "Entrada via Cadastro (Merge)", 
            costPrice: newProduct.cost_price 
          })
          setIsTransactionOpen(true)
        }
        return 
      }
    }

    try {
      await createProduct(newProduct, studioId)
      toast({ title: "Produto cadastrado!" })
      setIsNewProductOpen(false)
      resetNewProductForm()
      fetchData()
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Erro ao salvar"
      toast({ title: "Erro ao criar produto", description: msg, variant: "destructive" })
    }
  }

  const handleEditClick = (product: Product) => {
    setEditingProduct(product)
    setEditProductMoneyDrafts({ cost: null, markup: null, selling: null, profit: null })
    setIsEditProductOpen(true)
  }

  const handleSaveEdit = async () => {
    if (!editingProduct) return
    try {
      const sub = editingProduct.subcategory?.toString?.().trim?.()
      await updateProduct(editingProduct.id, { ...editingProduct, subcategory: sub || null }, studioId!)
      toast({ title: "Produto atualizado!" })
      setIsEditProductOpen(false)
      fetchData()
    } catch (error) {
      toast({ title: "Erro ao atualizar produto", variant: "destructive" })
    }
  }

  const handleDeleteClick = (productId: string) => {
    setProductToDelete(productId)
    setIsDeleteAlertOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!productToDelete) return
    try {
      await deleteProduct(productToDelete, studioId!)
      toast({ title: "Produto removido!" })
      setIsDeleteAlertOpen(false)
      fetchData()
    } catch (error) {
      toast({ title: "Erro ao remover produto", variant: "destructive" })
    }
  }

  const handleTransaction = async () => {
    try {
      const reason = transactionData.reason || (transactionType === 'in' ? 'Entrada Manual' : 'Ajuste de Estoque')
      const price = transactionType === 'in' && transactionData.costPrice > 0 ? transactionData.costPrice : undefined
      
      await registerTransaction(selectedProduct, transactionType as any, transactionData.quantity, reason, studioId!, price)
      
      toast({ title: "Movimentação registrada com sucesso!" })
      setIsTransactionOpen(false)
      setTransactionData({ quantity: 1, reason: "", costPrice: 0 }) 
      fetchData()
    } catch (error: any) {
      toast({ title: "Erro na movimentação", description: error.message, variant: "destructive" })
    }
  }

  const handleScanSuccess = async (decodedText: string) => {
    if (!studioId) {
      toast({ title: "Erro", description: "Estúdio não identificado. Faça login e vincule-se a um estúdio.", variant: "destructive" })
      return
    }
    try {
      const existingProduct = await getProductBySku(decodedText, studioId)
      if (existingProduct) {
        handleEditClick(existingProduct)
      } else {
        const fromCatalog = await getProductByBarcodeFromCatalog(decodedText)
        setNewProduct({
          name: fromCatalog?.name ?? "",
          category: fromCatalog?.category ?? "Geral",
          subcategory: "",
          min_quantity: 5,
          quantity: 0,
          cost_price: 0,
          selling_price: fromCatalog?.suggested_price ?? 0,
          sku: decodedText,
          ncm: "",
          show_in_marketplace: true,
        })
        setNewProductMoneyDrafts({ cost: null, markup: null, selling: null, profit: null })
        setIsNewProductOpen(true)
      }
    } catch (err: any) {
      toast({ title: "Erro", description: err?.message || "Não foi possível buscar o produto.", variant: "destructive" })
    }
  }

  const catalogSearchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastCatalogQuery = useRef<string>("")

  const handleCatalogSearch = useCallback((query: string) => {
    setCatalogSearchQuery(query)
    if (catalogSearchTimeout.current) clearTimeout(catalogSearchTimeout.current)
    if (query.length < 2) {
      setCatalogResults([])
      setShowCatalogResults(false)
      setCatalogSearching(false)
      return
    }

    // 1. Resultados locais IMEDIATOS (sem debounce)
    const localResults = searchLocalCatalog(query)
    setCatalogResults(localResults)
    setShowCatalogResults(true)
    setCatalogSearching(true)

    // 2. API Open Food Facts com debounce curto (150ms)
    lastCatalogQuery.current = query
    catalogSearchTimeout.current = setTimeout(async () => {
      const q = lastCatalogQuery.current
      if (!q || q.length < 2) {
        setCatalogSearching(false)
        return
      }
      try {
        const fullResults = await searchCatalog(q)
        // Só atualiza se o usuário não mudou a busca
        if (lastCatalogQuery.current === q) {
          setCatalogResults(fullResults)
        }
      } finally {
        if (lastCatalogQuery.current === q) {
          setCatalogSearching(false)
        }
      }
    }, 150)
  }, [])

  const handleSelectCatalogResult = (item: CatalogSearchResult) => {
    setNewProduct(prev => ({
      ...prev,
      sku: item.sku,
      name: item.name,
      category: item.category,
      subcategory: "",
      selling_price: item.suggested_price ?? prev.selling_price,
    }))
    setNewProductMoneyDrafts({ cost: null, markup: null, selling: null, profit: null })
    setCatalogSearchQuery("")
    setCatalogResults([])
    setShowCatalogResults(false)
  }

  const resetNewProductForm = () => {
    setNewProduct({
      name: "",
      category: "Geral",
      subcategory: "",
      min_quantity: 5,
      quantity: 0,
      cost_price: 0,
      selling_price: 0,
      sku: "",
      ncm: "",
      show_in_marketplace: true,
    })
    setCatalogSearchQuery("")
    setCatalogResults([])
    setShowCatalogResults(false)
    setNewProductMoneyDrafts({ cost: null, markup: null, selling: null, profit: null })
  }

  const handleNcmSearch = async (query: string) => {
    setNcmSearchQuery(query);
    if (query.length >= 2) {
      const results = await searchNcm(query);
      setNcmResults(results);
      setShowNcmResults(true);
    } else {
      setNcmResults([]);
      setShowNcmResults(false);
    }
  }

  const [showMarketplaceOnly, setShowMarketplaceOnly] = useState(false)

  const filteredProducts = products.filter(p => {
    const q = searchInput.toLowerCase()
    const matchesSearch = (
      p.name.toLowerCase().includes(q) ||
      (p.sku && p.sku.includes(searchInput)) ||
      (p.subcategory && String(p.subcategory).toLowerCase().includes(q))
    )
    if (showMarketplaceOnly) {
      return matchesSearch && p.show_in_marketplace === true
    }
    return matchesSearch
  })

  return (
    <ModuleGuard module="inventory" showFullError>
      <div className="min-h-screen bg-background flex flex-col">
        <Header title={`Gestão de Estoque - ${vocabulary.establishment}`} />
      
      <BarcodeScanner 
        isOpen={isScannerOpen} 
        onClose={() => setIsScannerOpen(false)} 
        onScanSuccess={handleScanSuccess} 
      />

      <div className="flex-1 p-6 space-y-6">
        
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border shadow-sm">
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="p-3 bg-primary/10 rounded-full">
                <Package className="w-6 h-6 text-primary" />
             </div>
             <div>
                <h2 className="text-lg font-bold">Controle de Inventário</h2>
                <p className="text-sm text-muted-foreground">Gerencie produtos, entradas e alertas de estoque.</p>
             </div>
          </div>
          
          <div className="flex gap-2">
            <Button type="button" size="lg" className="h-12 bg-primary hover:bg-primary/90 px-4" onClick={() => setIsNewProductOpen(true)}>
              <Plus className="w-5 h-5 mr-2" /> Novo Produto
            </Button>
            <Button type="button" size="lg" variant="outline" className="h-12 border-primary/20 text-primary hover:bg-primary/5" onClick={() => setIsScannerOpen(true)}>
              <Camera className="w-5 h-5 mr-2" /> Escanear
            </Button>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Valor em Estoque (Venda)</p>
                <h3 className="text-2xl font-bold text-primary">{formatPrice(stats.totalSalesValue)}</h3>
              </div>
              <Package className="w-8 h-8 text-primary/50" />
            </CardContent>
          </Card>
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700 dark:text-green-300">Lucro Potencial</p>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">{formatPrice(stats.potentialProfit)}</h3>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500/50" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Itens em Estoque</p>
                <h3 className="text-2xl font-bold">{stats.totalItems} <span className="text-sm font-normal text-muted-foreground">unid.</span></h3>
              </div>
              <Archive className="w-8 h-8 text-muted-foreground/50" />
            </CardContent>
          </Card>
        </div>

        {/* MAIN CONTENT: PRODUCTS TABLE */}
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <CardTitle>Inventário Atual</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Switch 
                  id="marketplace-filter" 
                  checked={showMarketplaceOnly} 
                  onCheckedChange={setShowMarketplaceOnly} 
                />
                <Label htmlFor="marketplace-filter" className="text-xs text-muted-foreground cursor-pointer">
                  Ver somente Marketplace
                </Label>
              </div>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por nome ou SKU..." 
                className="pl-9" 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr className="text-left border-b">
                    <th className="p-3 font-medium">Produto</th>
                    <th className="p-3 font-medium text-center">Qtd.</th>
                    <th className="p-3 font-medium text-right">Preço</th>
                    <th className="p-3 font-medium text-center">Status</th>
                    <th className="p-3 font-medium text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {product.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                              <Badge variant="secondary" className="text-[10px] h-4 px-1 py-0 font-normal bg-muted text-muted-foreground">
                                {product.subcategory
                                  ? `${product.category} — ${product.subcategory}`
                                  : product.category}
                              </Badge>
                              {product.sku && (
                                <p className="text-[10px] text-muted-foreground">
                                  SKU: {product.sku}
                                </p>
                              )}
                              {product.show_in_marketplace && (
                                <Badge variant="outline" className="text-[10px] h-4 px-1 py-0 font-normal border-blue-200 text-blue-600 bg-blue-50">
                                  Marketplace
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-center font-bold">
                        {product.quantity}
                      </td>
                      <td className="p-3 text-right font-medium">{formatPrice(product.selling_price)}</td>
                      <td className="p-3 text-center">
                        {product.quantity === 0 ? (
                          <Badge variant="destructive">Esgotado</Badge>
                        ) : product.quantity <= product.min_quantity ? (
                          <Badge variant="outline" className="border-yellow-500 text-yellow-600 bg-yellow-50">Baixo</Badge>
                        ) : (
                          <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50">OK</Badge>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditClick(product)}>
                              <Edit2 className="mr-2 h-4 w-4" /> Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => {
                              setSelectedProduct(product.id)
                              setTransactionType('in')
                              setIsTransactionOpen(true)
                            }}>
                              <Plus className="mr-2 h-4 w-4" /> Adicionar Estoque
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-600 focus:text-red-600"
                              onClick={() => handleDeleteClick(product.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                  {filteredProducts.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-muted-foreground">Nenhum produto encontrado.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* RECENT TRANSACTIONS */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Últimas Movimentações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {transactions.slice(0, 8).map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      tx.type === 'sale' ? 'bg-green-100 text-green-600' : 
                      tx.type === 'in' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                       {tx.type === 'in' ? <Plus className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-xs font-medium truncate max-w-[100px]">{tx.product?.name}</p>
                      <p className="text-[10px] text-muted-foreground capitalize">{tx.reason}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-bold ${tx.type === 'in' ? 'text-blue-600' : 'text-red-600'}`}>
                      {tx.type === 'in' ? '+' : '-'}{tx.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      </div>

      {/* MODALS */}
      <Dialog open={isNewProductOpen} onOpenChange={(open) => {
        setIsNewProductOpen(open)
        if (!open) resetNewProductForm()
      }}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Cadastrar Novo Produto</DialogTitle>
            <DialogDescription>
              Inclua SKU, categoria e preços. A categoria e a subcategoria podem ser criadas aqui.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Busca por nome - preenche automaticamente SKU, nome, categoria e preço */}
            <div className="grid gap-2">
              <Label>Buscar produto por nome (Open Food Facts + catálogo)</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Digite o nome do produto..."
                  className="pl-9"
                  value={catalogSearchQuery}
                  onChange={e => handleCatalogSearch(e.target.value)}
                  onFocus={() => catalogResults.length > 0 && setShowCatalogResults(true)}
                  onBlur={() => setTimeout(() => setShowCatalogResults(false), 200)}
                />
                {catalogSearching && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground" />}
                {showCatalogResults && catalogResults.length > 0 && (
                  <div className="absolute z-50 mt-1 w-full rounded-md border bg-background shadow-lg max-h-48 overflow-auto">
                    {catalogResults.map((item) => (
                      <button
                        key={item.sku}
                        type="button"
                        className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex justify-between items-center gap-2"
                        onMouseDown={(e) => {
                          e.preventDefault()
                          handleSelectCatalogResult(item)
                        }}
                      >
                        <span className="truncate">{item.name}</span>
                        <span className="text-xs text-muted-foreground shrink-0">
                          {item.sku} · {item.category}
                          {item.suggested_price ? ` · R$ ${item.suggested_price.toFixed(2)}` : ""}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Código de Barras (SKU)</Label>
              <div className="flex gap-2">
                <Input value={newProduct.sku} onChange={e => setNewProduct({...newProduct, sku: e.target.value})} placeholder="Ou escaneie" />
                <Button type="button" variant="outline" size="icon" onClick={() => setIsScannerOpen(true)}><Camera className="w-4 h-4" /></Button>
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Nome</Label>
              <Input value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
            </div>
            <div className="grid gap-2">
              <Label>Tipo de Produto (Categoria)</Label>
              <EntityPicker
                value={newProduct.category}
                options={allCategories}
                placeholder="Selecione o tipo..."
                onChange={(v) => setNewProduct((prev) => ({ ...prev, category: v, subcategory: "" }))}
                onCreateSubmit={(n) => {
                  setCustomCategories((prev) => [...prev, n])
                  setNewProduct((prev) => ({ ...prev, category: n, subcategory: "" }))
                }}
                createNewLabel="Criar novo tipo..."
                createInputPlaceholder="Ex.: Bebidas, Snacks…"
              />
            </div>
            <div className="grid gap-2">
              <Label>Subcategoria</Label>
              <p className="text-xs text-muted-foreground">Opcional. Ex.: Bebidas — Red Bull</p>
              <EntityPicker
                value={newProduct.subcategory?.trim() ? newProduct.subcategory : ""}
                options={allSubcategoriesForNew}
                allowEmpty
                emptyLabel="Sem subcategoria"
                placeholder="Nenhuma — ex.: Red Bull"
                onChange={(v) => setNewProduct((prev) => ({ ...prev, subcategory: v }))}
                onCreateSubmit={(n) => {
                  setCustomSubcategoriesByCategory((prev) => ({
                    ...prev,
                    [newProduct.category]: Array.from(new Set([...(prev[newProduct.category] || []), n])),
                  }))
                  setNewProduct((prev) => ({ ...prev, subcategory: n }))
                }}
                createNewLabel="Nova subcategoria..."
                createInputPlaceholder="Ex.: Red Bull, Água…"
              />
            </div>
            <div className="grid gap-2 rounded-lg border bg-muted/30 p-3">
              <p className="text-xs text-muted-foreground">
                Precificação: qualquer campo pode ser a referência — ao editar custo, a receita (preço) mantém-se; ao editar markup, lucro ou receita, os demais recalculam. Use vírgula ou ponto nos valores (ex.: 12,50 ou 1.234,56).
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Custo (base)</Label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="0,00"
                    value={newProductMoneyDrafts.cost ?? formatMoneyBr(newProduct.cost_price)}
                    onFocus={() =>
                      setNewProductMoneyDrafts(d => ({
                        ...d,
                        cost: formatMoneyBr(newProduct.cost_price),
                      }))
                    }
                    onChange={e => {
                      const raw = e.target.value
                      setNewProductMoneyDrafts(d => ({ ...d, cost: raw }))
                      handleNewProductCostChange(raw)
                    }}
                    onBlur={() => setNewProductMoneyDrafts(d => ({ ...d, cost: null }))}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Markup (%)</Label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="0"
                    value={
                      newProductMoneyDrafts.markup ??
                      formatMoneyBr(markupFromCostSelling(newProduct.cost_price, newProduct.selling_price))
                    }
                    onFocus={() =>
                      setNewProductMoneyDrafts(d => ({
                        ...d,
                        markup: formatMoneyBr(
                          markupFromCostSelling(newProduct.cost_price, newProduct.selling_price)
                        ),
                      }))
                    }
                    onChange={e => {
                      const raw = e.target.value
                      setNewProductMoneyDrafts(d => ({ ...d, markup: raw }))
                      handleNewProductMarkupChange(raw)
                    }}
                    onBlur={() => setNewProductMoneyDrafts(d => ({ ...d, markup: null }))}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Receita (preço de venda)</Label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="0,00"
                    value={newProductMoneyDrafts.selling ?? formatMoneyBr(newProduct.selling_price)}
                    onFocus={() =>
                      setNewProductMoneyDrafts(d => ({
                        ...d,
                        selling: formatMoneyBr(newProduct.selling_price),
                      }))
                    }
                    onChange={e => {
                      const raw = e.target.value
                      setNewProductMoneyDrafts(d => ({ ...d, selling: raw }))
                      handleNewProductSellingChange(raw)
                    }}
                    onBlur={() => setNewProductMoneyDrafts(d => ({ ...d, selling: null }))}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Lucro (unitário)</Label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="0,00"
                    value={
                      newProductMoneyDrafts.profit ??
                      formatMoneyBr(profitFromCostSelling(newProduct.cost_price, newProduct.selling_price))
                    }
                    onFocus={() =>
                      setNewProductMoneyDrafts(d => ({
                        ...d,
                        profit: formatMoneyBr(
                          profitFromCostSelling(newProduct.cost_price, newProduct.selling_price)
                        ),
                      }))
                    }
                    onChange={e => {
                      const raw = e.target.value
                      setNewProductMoneyDrafts(d => ({ ...d, profit: raw }))
                      handleNewProductProfitChange(raw)
                    }}
                    onBlur={() => setNewProductMoneyDrafts(d => ({ ...d, profit: null }))}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label>Mostrar no Marketplace</Label>
                <p className="text-xs text-muted-foreground">
                  Disponibilize este produto para venda online nos portais.
                </p>
              </div>
              <Switch
                checked={newProduct.show_in_marketplace}
                onCheckedChange={(checked) => setNewProduct({ ...newProduct, show_in_marketplace: checked })}
              />
            </div>
            <div className="grid gap-2">
              <Label>Estoque Inicial</Label>
              <Input
                type="number"
                min="0"
                value={newProduct.quantity}
                onChange={e => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value, 10) || 0 })}
              />
            </div>
          </div>
          <DialogFooter><Button type="button" onClick={handleCreateProduct} className="w-full" disabled={loading}>Salvar</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isTransactionOpen} onOpenChange={setIsTransactionOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Movimentação</DialogTitle>
            <DialogDescription>Registre entrada, saída ou ajuste de quantidade.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Quantidade</Label>
              <Input type="number" value={transactionData.quantity} onChange={e => setTransactionData({...transactionData, quantity: parseInt(e.target.value) || 0})} />
            </div>
            <div className="grid gap-2">
              <Label>Motivo</Label>
              <Input value={transactionData.reason} onChange={e => setTransactionData({...transactionData, reason: e.target.value})} />
            </div>
          </div>
          <DialogFooter><Button type="button" onClick={handleTransaction} className="w-full" disabled={loading}>Confirmar</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditProductOpen} onOpenChange={setIsEditProductOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Editar produto</DialogTitle>
            <DialogDescription>Altere categoria, subcategoria, preço ou quantidade.</DialogDescription>
          </DialogHeader>
          {editingProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Código de Barras (SKU)</Label>
                <div className="flex gap-2">
                  <Input value={editingProduct.sku || ''} onChange={e => setEditingProduct({...editingProduct, sku: e.target.value})} placeholder="Ou escaneie" />
                  <Button type="button" variant="outline" size="icon" onClick={() => setIsScannerOpen(true)}><Camera className="w-4 h-4" /></Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Nome</Label>
                <Input value={editingProduct.name} onChange={e => setEditingProduct({...editingProduct, name: e.target.value})} />
              </div>
              <div className="grid gap-2">
                <Label>Tipo de Produto (Categoria)</Label>
                <EntityPicker
                  value={editingProduct.category}
                  options={allCategories}
                  placeholder="Selecione o tipo..."
                  onChange={(v) =>
                    setEditingProduct((prev) => (prev ? { ...prev, category: v, subcategory: "" } : null))
                  }
                  onCreateSubmit={(n) => {
                    setCustomCategories((prev) => [...prev, n])
                    setEditingProduct((prev) => (prev ? { ...prev, category: n, subcategory: "" } : null))
                  }}
                  createNewLabel="Criar novo tipo..."
                  createInputPlaceholder="Ex.: Bebidas, Snacks…"
                />
              </div>
              <div className="grid gap-2">
                <Label>Subcategoria</Label>
                <p className="text-xs text-muted-foreground">Opcional. Ex.: Bebidas — Red Bull</p>
                <EntityPicker
                  value={
                    editingProduct.subcategory && String(editingProduct.subcategory).trim()
                      ? String(editingProduct.subcategory)
                      : ""
                  }
                  options={allSubcategoriesForEdit}
                  allowEmpty
                  emptyLabel="Sem subcategoria"
                  placeholder="Nenhuma — ex.: Red Bull"
                  onChange={(v) =>
                    setEditingProduct((prev) => (prev ? { ...prev, subcategory: v } : null))
                  }
                  onCreateSubmit={(n) => {
                    if (!editingProduct) return
                    const cat = editingProduct.category
                    setCustomSubcategoriesByCategory((prev) => ({
                      ...prev,
                      [cat]: Array.from(new Set([...(prev[cat] || []), n])),
                    }))
                    setEditingProduct((prev) => (prev ? { ...prev, subcategory: n } : null))
                  }}
                  createNewLabel="Nova subcategoria..."
                  createInputPlaceholder="Ex.: Red Bull, Água…"
                />
              </div>
              <div className="grid gap-2 rounded-lg border bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground">
                  Precificação: qualquer campo pode ser a referência — ao editar custo, a receita (preço) mantém-se; ao editar markup, lucro ou receita, os demais recalculam. Use vírgula ou ponto nos valores (ex.: 12,50 ou 1.234,56).
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Custo (base)</Label>
                    <Input
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="0,00"
                      value={editProductMoneyDrafts.cost ?? formatMoneyBr(editingProduct.cost_price || 0)}
                      onFocus={() =>
                        setEditProductMoneyDrafts(d => ({
                          ...d,
                          cost: formatMoneyBr(editingProduct.cost_price || 0),
                        }))
                      }
                      onChange={e => {
                        const raw = e.target.value
                        setEditProductMoneyDrafts(d => ({ ...d, cost: raw }))
                        handleEditProductCostChange(raw)
                      }}
                      onBlur={() => setEditProductMoneyDrafts(d => ({ ...d, cost: null }))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Markup (%)</Label>
                    <Input
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="0"
                      value={
                        editProductMoneyDrafts.markup ??
                        formatMoneyBr(markupFromCostSelling(editingProduct.cost_price || 0, editingProduct.selling_price || 0))
                      }
                      onFocus={() =>
                        setEditProductMoneyDrafts(d => ({
                          ...d,
                          markup: formatMoneyBr(
                            markupFromCostSelling(editingProduct.cost_price || 0, editingProduct.selling_price || 0)
                          ),
                        }))
                      }
                      onChange={e => {
                        const raw = e.target.value
                        setEditProductMoneyDrafts(d => ({ ...d, markup: raw }))
                        handleEditProductMarkupChange(raw)
                      }}
                      onBlur={() => setEditProductMoneyDrafts(d => ({ ...d, markup: null }))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Receita (preço de venda)</Label>
                    <Input
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="0,00"
                      value={editProductMoneyDrafts.selling ?? formatMoneyBr(editingProduct.selling_price || 0)}
                      onFocus={() =>
                        setEditProductMoneyDrafts(d => ({
                          ...d,
                          selling: formatMoneyBr(editingProduct.selling_price || 0),
                        }))
                      }
                      onChange={e => {
                        const raw = e.target.value
                        setEditProductMoneyDrafts(d => ({ ...d, selling: raw }))
                        handleEditProductSellingChange(raw)
                      }}
                      onBlur={() => setEditProductMoneyDrafts(d => ({ ...d, selling: null }))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Lucro (unitário)</Label>
                    <Input
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="0,00"
                      value={
                        editProductMoneyDrafts.profit ??
                        formatMoneyBr(profitFromCostSelling(editingProduct.cost_price || 0, editingProduct.selling_price || 0))
                      }
                      onFocus={() =>
                        setEditProductMoneyDrafts(d => ({
                          ...d,
                          profit: formatMoneyBr(
                            profitFromCostSelling(editingProduct.cost_price || 0, editingProduct.selling_price || 0)
                          ),
                        }))
                      }
                      onChange={e => {
                        const raw = e.target.value
                        setEditProductMoneyDrafts(d => ({ ...d, profit: raw }))
                        handleEditProductProfitChange(raw)
                      }}
                      onBlur={() => setEditProductMoneyDrafts(d => ({ ...d, profit: null }))}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label>Mostrar no Marketplace</Label>
                  <p className="text-xs text-muted-foreground">
                    Disponibilize este produto para venda online nos portais.
                  </p>
                </div>
                <Switch
                  checked={editingProduct.show_in_marketplace}
                  onCheckedChange={(checked) => setEditingProduct({ ...editingProduct, show_in_marketplace: checked })}
                />
              </div>
              <div className="grid gap-2">
                <Label>Estoque Inicial</Label>
                <Input
                  type="number"
                  min="0"
                  value={editingProduct.quantity || 0}
                  onChange={e => setEditingProduct({ ...editingProduct, quantity: parseInt(e.target.value, 10) || 0 })}
                />
              </div>
            </div>
          )}
          <DialogFooter><Button type="button" onClick={handleSaveEdit} disabled={loading} className="w-full">Salvar</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Excluir?</AlertDialogTitle></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Não</AlertDialogCancel><AlertDialogAction onClick={handleConfirmDelete} className="bg-red-600">Sim</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ModuleGuard>
  )
}
