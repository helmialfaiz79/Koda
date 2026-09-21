import { createElement, useEffect, useRef } from 'react'
import 'vanilla-colorful/hex-color-picker.js'

type ColorPickerElement = HTMLElement & { color: string }

export function AccentColorPicker({ color, onChange }: { color: string; onChange: (color: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const picker = containerRef.current?.querySelector('hex-color-picker') as ColorPickerElement | null
    if (!picker) return
    picker.color = color
    const handleChange = (event: Event) => onChange((event as CustomEvent<{ value: string }>).detail.value)
    picker.addEventListener('color-changed', handleChange)
    return () => picker.removeEventListener('color-changed', handleChange)
  }, [color, onChange])

  return <div ref={containerRef} className="color-picker">{createElement('hex-color-picker', { color })}</div>
}
