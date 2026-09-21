import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { ThemeSwitcher } from './ThemeSwitcher'

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#111318] dark:text-slate-100">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-60">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur md:px-6 dark:border-white/10 dark:bg-[#17191f]/90">
          <button type="button" className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-white/10" onClick={() => setSidebarOpen(true)} aria-label="Buka navigasi">
            <Menu size={21} />
          </button>
          <div className="ml-auto flex items-center gap-3">
            <ThemeSwitcher />
            <div className="hidden h-8 w-px bg-slate-200 sm:block dark:bg-white/10" />
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium">Administrator</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Koda Workspace</p>
            </div>
            <div className="grid size-9 place-items-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-100">A</div>
          </div>
        </header>
        <main className="p-4 md:p-6 lg:p-8"><Outlet /></main>
      </div>
    </div>
  )
}
