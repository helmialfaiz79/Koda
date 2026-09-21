import clsx from 'clsx'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../../app/navigation'

type SidebarProps = { open: boolean; onClose: () => void }

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && <button type="button" aria-label="Tutup navigasi" className="fixed inset-0 z-30 bg-slate-950/45 lg:hidden" onClick={onClose} />}
      <aside className={clsx('fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 dark:border-white/10 dark:bg-[#17191f]', open ? 'translate-x-0' : '-translate-x-full')}>
        <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-5 dark:border-white/10">
          <div className="grid size-9 place-items-center rounded-xl bg-brand-600 font-bold text-white">K</div>
          <div><p className="font-semibold leading-tight">Koda</p><p className="text-xs text-slate-500 dark:text-slate-400">Sales Dashboard</p></div>
          <button type="button" className="ml-auto rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden dark:hover:bg-white/10" onClick={onClose} aria-label="Tutup navigasi"><X size={19} /></button>
        </div>
        <nav className="flex-1 space-y-1 p-3" aria-label="Navigasi utama">
          {navigation.map(({ label, path, icon: Icon }) => (
            <NavLink key={path} to={path} end={path === '/'} onClick={onClose} className={({ isActive }) => clsx('flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors', isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-100' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white')}>
              <Icon size={19} strokeWidth={1.8} />{label}
            </NavLink>
          ))}
        </nav>
        <p className="p-5 text-xs text-slate-400">Koda v0.1.0</p>
      </aside>
    </>
  )
}
