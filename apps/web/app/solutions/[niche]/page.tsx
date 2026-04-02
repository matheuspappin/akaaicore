"use client"

import { useEffect, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getNicheConfig } from "@/config/niches"
import { useParams } from "next/navigation"
import { OFFICIAL_LOGO } from "@/config/branding"

export default function GenericNichePrePage() {
  const params = useParams()
  const nicheId = params.niche as string;

  const config = useMemo(() => getNicheConfig(nicheId), [nicheId]);
  const NicheIcon = config.icon;

  useEffect(() => {
    document.body.classList.add("scrollbar-sidebar-dark")
    return () => document.body.classList.remove("scrollbar-sidebar-dark")
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden bg-black font-sans">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 50% 40% at 50% 42%, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%),
              linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.88) 100%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex items-center justify-center gap-3">
              <motion.div
                className={`w-14 h-14 flex-shrink-0 rounded-xl bg-${config.themeColor} flex items-center justify-center`}
                style={{ boxShadow: `0 0 40px ${config.shadowColor}` }}
                animate={{
                  boxShadow: [
                    `0 0 40px ${config.shadowColor}`,
                    `0 0 60px ${config.shadowColor.replace('0.5', '0.7')}`,
                    `0 0 40px ${config.shadowColor}`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <NicheIcon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="h-14 md:h-16 min-w-[280px] md:min-w-[360px] w-full max-w-[360px] flex items-center justify-center overflow-visible">
                <span className="text-3xl font-black text-white">{config.name}</span>
              </div>
            </div>
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-${config.themeColor}/30 bg-${config.themeColor}/10 text-${config.themeColor} text-xs font-bold uppercase tracking-widest backdrop-blur-sm`}>
              {config.label}
            </span>
          </div>
          <p className="text-slate-300 text-lg md:text-xl max-w-md mx-auto font-medium">
            {config.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <Button
            size="lg"
            className="relative h-16 px-12 text-xl rounded-2xl bg-white/95 hover:bg-white text-slate-900 font-bold border-0 shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 group overflow-hidden"
            asChild
          >
            <Link href={`/solutions/${nicheId}/landing`}>
              <span className="relative flex items-center gap-2">
                Entrar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Button
            type="button"
            variant="ghost"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-white/20"
            asChild
          >
            <Link href={`/solutions/${nicheId}/login`}>
              Já tenho conta
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <Button
            type="button"
            variant="ghost"
            className="flex items-center gap-2.5 group text-white/50 hover:text-white/80"
            asChild
          >
            <Link href="/home">
              <img src={OFFICIAL_LOGO} alt="AKAAI HUB" className="w-7 h-7 opacity-60 group-hover:opacity-90 transition-opacity object-contain" />
              <span className="font-black text-xs tracking-tight group-hover:text-white/80 transition-colors">AKAAI <span className="text-white/35">HUB</span></span>
            </Link>
          </Button>
          <span className="text-[10px] font-mono text-white/35 uppercase tracking-widest">Powered by AKAAI CORE</span>
        </motion.div>
      </div>
    </div>
  )
}
