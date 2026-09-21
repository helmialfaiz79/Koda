import clsx from 'clsx'
import { X } from 'lucide-react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../../app/navigation'

type SidebarProps = { open: boolean; onClose: () => void }

export function Sidebar({ open, onClose }: SidebarProps) {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  return (
    <>
      <AnimatePresence>
        {open && <motion.button type="button" aria-label="Tutup navigasi" className="fixed inset-0 z-30 bg-slate-950/45 lg:hidden" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
      </AnimatePresence>
      <aside className={clsx('fixed bottom-3 left-3 top-3 z-40 flex w-56 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-transform duration-200 lg:translate-x-0 dark:border-white/[0.11] dark:bg-[#181b21]/95 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_22px_48px_-20px_rgba(0,0,0,0.95),0_4px_12px_-8px_rgba(0,0,0,0.9)]', open ? 'translate-x-0' : '-translate-x-[calc(100%+1.5rem)]')}>
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-3"><div className="relative grid size-8 place-items-center rounded-[11px] bg-brand-600 text-xs font-bold text-white shadow-sm"><span>K</span><span className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-white bg-emerald-400 dark:border-[#181a20]" /></div><div><p className="text-[14px] font-bold tracking-[0.08em]">KODA</p><p className="text-[10px] text-slate-400">Dashboard template</p></div></div>
          <button type="button" className="ml-auto rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden dark:hover:bg-white/10" onClick={onClose} aria-label="Tutup navigasi"><X size={19} /></button>
        </div>
        <div className="px-5 pb-2 pt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">Workspace</div>
        <LayoutGroup id="sidebar-liquid">
          <nav className="flex-1 space-y-1 px-2.5" aria-label="Navigasi utama" onMouseLeave={() => setHoveredPath(null)}>
            {navigation.map(({ label, path, icon: Icon }) => (
              <NavLink key={path} to={path} end={path === '/'} onClick={onClose} onMouseEnter={() => setHoveredPath(path)} className={({ isActive }) => clsx('relative flex h-10 items-center gap-3 px-3 text-[13px] font-medium transition-colors duration-150', isActive ? 'text-brand-700 dark:text-brand-100' : 'text-slate-500 dark:text-slate-400', hoveredPath === path && 'text-slate-950 dark:text-white')}>
                {({ isActive }) => <>{(hoveredPath === path || (hoveredPath === null && isActive)) && <motion.span layoutId="liquid-nav" className={clsx('absolute inset-0 -z-0 border', hoveredPath === path ? 'rounded-[14px_9px_14px_9px] border-brand-500/15 bg-brand-100/80 dark:bg-brand-500/15' : 'rounded-xl border-brand-500/10 bg-brand-50 dark:bg-brand-500/10')} transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.7 }} />}
                <Icon className="relative z-10" size={17} strokeWidth={1.7} /><span className="relative z-10">{label}</span>{isActive && <motion.span layoutId="active-dot" className="relative z-10 ml-auto size-1.5 rounded-full bg-brand-600" />}</>}
              </NavLink>
            ))}
          </nav>
        </LayoutGroup>
        <div className="m-3 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-white/[0.03]"><div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500"/><p className="text-[11px] font-medium">Semua sistem normal</p></div><p className="mt-1 pl-3.5 text-[10px] text-slate-400">Koda v0.1.0</p></div>
      </aside>
    </>
  )
}
