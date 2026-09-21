import { LayoutDashboard, type LucideIcon } from 'lucide-react'

export type NavigationItem = { label: string; path: string; icon: LucideIcon }

export const navigation: NavigationItem[] = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
]
