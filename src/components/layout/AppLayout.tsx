import { Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { ThemeSwitcher } from './ThemeSwitcher'

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-900 dark:bg-[#0d0f13] dark:text-slate-100">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-60">
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between bg-gradient-to-b from-[#f3f4f6] via-[#f3f4f6]/95 to-transparent px-4 md:px-6 dark:from-[#0d0f13] dark:via-[#0d0f13]/95">
          <button type="button" className="rounded-xl border border-slate-200/80 bg-white/85 p-2 text-slate-600 shadow-[0_8px_20px_-14px_rgba(15,23,42,0.55)] backdrop-blur-lg hover:bg-white lg:hidden dark:border-white/10 dark:bg-[#1b1e24] dark:text-slate-300 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_12px_24px_-14px_rgba(0,0,0,0.95)] dark:hover:bg-[#22252d]" onClick={() => setSidebarOpen(true)} aria-label="Buka navigasi">
            <Menu size={21} />
          </button>
          <div className="ml-auto flex items-center gap-3 rounded-2xl border border-white/90 bg-white/80 p-1.5 pl-3 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.5),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl dark:border-white/10 dark:bg-[#1b1e24]/95 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_16px_30px_-16px_rgba(0,0,0,0.95),0_3px_8px_-5px_rgba(0,0,0,0.9)]">
            <ThemeSwitcher />
            <div className="hidden text-right sm:block">
              <p className="text-[12px] font-semibold leading-tight">Administrator</p>
              <p className="mt-0.5 text-[10px] text-slate-400">Example workspace</p>
            </div>
            <div className="grid size-9 place-items-center rounded-xl bg-brand-600 text-xs font-semibold text-white shadow-[0_6px_14px_-8px_var(--color-brand-600)]">A</div>
          </div>
        </header>
        <main className="w-full px-4 pb-6 md:px-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={location.pathname} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.16 }}>
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
