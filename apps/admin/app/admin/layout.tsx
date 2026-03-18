import React from "react"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { AdminSidebarClient } from "@/components/admin/admin-sidebar-client"
import { checkSuperAdminDetailed } from "@/lib/actions/super-admin"

const getWebLoginUrl = () => {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:3000"
  return `${base.replace(/\/$/, "")}/portal/login`
}

function getAdminOrigin(): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:3000"
  try {
    const url = new URL(base)
    url.port = "3001"
    return url.origin
  } catch {
    return "http://127.0.0.1:3001"
  }
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAdmin } = await checkSuperAdminDetailed()

  if (!isAdmin) {
    const loginUrl = getWebLoginUrl()
    let adminOrigin: string
    try {
      const h = await headers()
      const host = h.get("host") || h.get("x-forwarded-host")
      const proto = h.get("x-forwarded-proto") || "http"
      adminOrigin = host ? `${proto}://${host}` : getAdminOrigin()
    } catch {
      adminOrigin = getAdminOrigin()
    }
    const returnTo = encodeURIComponent(`${adminOrigin}/admin`)
    redirect(`${loginUrl}?returnTo=${returnTo}`)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminSidebarClient />
      
      {/* Mobile Top Bar */}
      <div className="lg:hidden h-16 bg-black border-b border-white/10 flex items-center px-4 sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
            <span className="text-white font-black text-xs">AK</span>
          </div>
          <span className="text-white font-black text-sm tracking-tight">AKAAI HUB</span>
        </div>
      </div>

      <main className="min-h-screen flex flex-col lg:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  )
}
