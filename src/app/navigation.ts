import { BarChart3, FileInput, Grid3X3, LayoutDashboard, Settings, Table2, type LucideIcon } from 'lucide-react'

export type NavigationItem = { label: string; path: string; icon: LucideIcon }

export const navigation: NavigationItem[] = [
  { label: 'Template 01', path: '/', icon: LayoutDashboard },
  { label: 'Template 02', path: '/template-02', icon: Table2 },
  { label: 'Template 03', path: '/template-03', icon: Grid3X3 },
  { label: 'Template 04', path: '/template-04', icon: FileInput },
  { label: 'Template 05', path: '/template-05', icon: BarChart3 },
  { label: 'Pengaturan', path: '/settings', icon: Settings },
]
