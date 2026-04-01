"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface AdminLayoutContextType {
  sidebarCollapsed: boolean
  setSidebarCollapsed: (v: boolean) => void
  mobileOpen: boolean
  setMobileOpen: (v: boolean) => void
}

const AdminLayoutContext = createContext<AdminLayoutContextType | undefined>(undefined)

export function AdminLayoutProvider({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Sincroniza estado de colapso com localStorage se desejado
  useEffect(() => {
    const saved = localStorage.getItem("admin_sidebar_collapsed")
    if (saved) setSidebarCollapsed(saved === "true")
  }, [])

  const handleSetCollapsed = (v: boolean) => {
    setSidebarCollapsed(v)
    localStorage.setItem("admin_sidebar_collapsed", String(v))
  }

  return (
    <AdminLayoutContext.Provider 
      value={{ 
        sidebarCollapsed, 
        setSidebarCollapsed: handleSetCollapsed, 
        mobileOpen, 
        setMobileOpen 
      }}
    >
      {children}
    </AdminLayoutContext.Provider>
  )
}

export function useAdminLayout() {
  const context = useContext(AdminLayoutContext)
  if (!context) {
    throw new Error("useAdminLayout must be used within an AdminLayoutProvider")
  }
  return context
}
