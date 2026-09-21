import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Theme = 'light' | 'dark' | 'system'
type ThemeContextValue = { theme: Theme; setTheme: (theme: Theme) => void; accent: string; setAccent: (color: string) => void }

const ThemeContext = createContext<ThemeContextValue | null>(null)
const storageKey = 'koda-theme'
const accentStorageKey = 'koda-accent'
const defaultAccent = '#2563eb'

function getStoredTheme(): Theme {
  const stored = localStorage.getItem(storageKey)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

function mix(hex: string, target: string, amount: number) {
  const from = hex.match(/\w\w/g)?.map((part) => Number.parseInt(part, 16)) ?? [37, 99, 235]
  const to = target.match(/\w\w/g)?.map((part) => Number.parseInt(part, 16)) ?? [255, 255, 255]
  return `#${from.map((value, index) => Math.round(value + (to[index] - value) * amount).toString(16).padStart(2, '0')).join('')}`
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)
  const [accent, setAccent] = useState(() => localStorage.getItem(accentStorageKey) ?? defaultAccent)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const applyTheme = () => {
      const useDark = theme === 'dark' || (theme === 'system' && media.matches)
      document.documentElement.classList.toggle('dark', useDark)
      document.documentElement.style.colorScheme = useDark ? 'dark' : 'light'
    }

    applyTheme()
    localStorage.setItem(storageKey, theme)
    media.addEventListener('change', applyTheme)
    return () => media.removeEventListener('change', applyTheme)
  }, [theme])

  useEffect(() => {
    const root = document.documentElement.style
    root.setProperty('--color-brand-50', mix(accent, '#ffffff', 0.92))
    root.setProperty('--color-brand-100', mix(accent, '#ffffff', 0.82))
    root.setProperty('--color-brand-500', accent)
    root.setProperty('--color-brand-600', mix(accent, '#000000', 0.12))
    root.setProperty('--color-brand-700', mix(accent, '#000000', 0.25))
    localStorage.setItem(accentStorageKey, accent)
  }, [accent])

  const value = useMemo(() => ({ theme, setTheme, accent, setAccent }), [theme, accent])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Provider dan hook sengaja berdekatan agar kontrak theme tetap sederhana.
// oxlint-disable-next-line react/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
