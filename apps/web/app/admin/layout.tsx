import React from "react"
import { redirect } from "next/navigation"
import { AdminLayoutProvider } from "@/components/admin/admin-layout-context"
import { AdminSidebarClient } from "@/components/admin/admin-sidebar-client"
import { AdminMain } from "@/components/admin/admin-main"
import { checkSuperAdminDetailed } from "@/lib/actions/super-admin"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Verificação server-side segura
  const { isAdmin } = await checkSuperAdminDetailed()
  
  if (!isAdmin) {
    redirect("/login")
  }

  return (
    <AdminLayoutProvider>
      <div className="min-h-screen bg-black text-white">
        <AdminSidebarClient />
        <AdminMain>{children}</AdminMain>
      </div>
    </AdminLayoutProvider>
  )
}
