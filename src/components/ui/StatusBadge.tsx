import clsx from 'clsx'

type Tone = 'green' | 'amber' | 'blue' | 'red' | 'gray'

const tones: Record<Tone, string> = {
  green: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  amber: 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  blue: 'bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300',
  red: 'bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
  gray: 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300',
}

export function StatusBadge({ children, tone = 'gray' }: { children: string; tone?: Tone }) {
  return <span className={clsx('inline-flex rounded-[9px] border border-current/10 px-2.5 py-1 text-[11px] font-medium', tones[tone])}>{children}</span>
}
