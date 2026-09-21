import type { ReactNode } from 'react'

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`overflow-hidden rounded-[20px] border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)] backdrop-blur-sm dark:border-white/[0.09] dark:bg-[#1a1d23] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_18px_36px_-22px_rgba(0,0,0,0.95),0_4px_10px_-7px_rgba(0,0,0,0.9)] ${className}`}>{children}</section>
}
