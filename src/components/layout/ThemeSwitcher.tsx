import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../app/theme'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const options = [
    { value: 'light' as const, label: 'Terang', icon: Sun },
    { value: 'dark' as const, label: 'Gelap', icon: Moon },
    { value: 'system' as const, label: 'Sistem', icon: Laptop },
  ]

  return <div className="flex rounded-md border border-slate-200 bg-slate-50 p-0.5 dark:border-white/10 dark:bg-white/5" aria-label="Pilihan tema">{options.map(({value,label,icon:Icon}) => <button key={value} type="button" onClick={() => setTheme(value)} title={label} aria-label={`Tema ${label}`} className={`rounded-[4px] p-1.5 transition-colors ${theme === value ? 'bg-white text-slate-900 shadow-sm dark:bg-white/10 dark:text-white' : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}><Icon size={15}/></button>)}</div>
}
