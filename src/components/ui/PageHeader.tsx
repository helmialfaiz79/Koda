import { Plus } from 'lucide-react'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description: string
  actionLabel?: string
  actionIcon?: ReactNode
}

export function PageHeader({ eyebrow, title, description, actionLabel, actionIcon }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 px-1 sm:flex-row sm:items-end">
      <div>
        {eyebrow && <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-500">{eyebrow}</p>}
        <h1 className="text-2xl font-semibold tracking-[-0.025em] md:text-[28px]">{title}</h1>
        <p className="mt-1.5 text-[13px] text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      {actionLabel && (
        <motion.button type="button" whileHover={{ y: -1, borderRadius: '14px 9px 14px 9px' }} whileTap={{ scale: 0.97 }} className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 text-[13px] font-medium text-white shadow-[0_8px_18px_-10px_var(--color-brand-600)] hover:bg-brand-700">
          {actionIcon ?? <Plus size={17} />}{actionLabel}
        </motion.button>
      )}
    </div>
  )
}
