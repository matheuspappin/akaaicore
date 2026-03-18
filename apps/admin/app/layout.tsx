import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster as SonnerToaster } from 'sonner'
import '../styles/globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AKAAI Admin',
  description: 'Painel administrativo AKAAI CORE',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body className={`${geist.className} antialiased`}>
        {children}
        <SonnerToaster position="top-right" richColors />
      </body>
    </html>
  )
}
