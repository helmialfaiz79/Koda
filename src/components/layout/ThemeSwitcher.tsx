import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme, type Theme } from '../../app/theme'

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Tema terang', icon: Sun },
  { value: 'dark', label: 'Tema gelap', icon: Moon },
  { value: 'system', label: 'Ikuti sistem', icon: Laptop },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const currentIndex = options.findIndex((option) => option.value === theme)
  const Icon = options[currentIndex].icon
  const cycleTheme = () => setTheme(options[(currentIndex + 1) % options.length].value)

  return <button type="button" onClick={cycleTheme} title={options[currentIndex].label} aria-label={`${options[currentIndex].label}. Klik untuk mengganti tema.`} className="rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"><Icon size={18} /></button>
}
