"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { useAdminLayout } from "./admin-layout-context"

export function AdminMain({ children }: { children: React.ReactNode }) {
  const { sidebarCollapsed } = useAdminLayout()

  return (
    <main 
      className={cn(
        "min-h-screen flex flex-col transition-all duration-300",
        sidebarCollapsed ? "lg:pl-[72px]" : "lg:pl-64"
      )}
    >
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </main>
  )
}
