import { Filter, Search } from 'lucide-react'

type TableToolbarProps = { placeholder: string; filterLabel?: string }

export function TableToolbar({ placeholder, filterLabel = 'Filter' }: TableToolbarProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-200/80 bg-slate-50/40 p-4 sm:flex-row dark:border-white/10 dark:bg-white/[0.015]">
      <label className="relative flex-1 sm:max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
        <input type="search" placeholder={placeholder} className="h-10 w-full rounded-xl border border-slate-200/80 bg-white/80 pl-9 pr-3 text-[13px] outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 dark:border-white/10 dark:bg-white/5" />
      </label>
      <button type="button" className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/70 px-3 text-[13px] font-medium text-slate-600 transition-colors hover:border-brand-500/25 hover:bg-brand-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:bg-brand-500/10"><Filter size={16} />{filterLabel}</button>
    </div>
  )
}
