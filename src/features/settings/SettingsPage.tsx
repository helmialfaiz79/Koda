import { CheckCircle2, Palette, Save, SwatchBook } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTheme } from '../../app/theme'
import { AccentColorPicker } from '../../components/ui/AccentColorPicker'
import { PageHeader } from '../../components/ui/PageHeader'
import { Panel } from '../../components/ui/Panel'

const presets = ['#2563eb', '#7c3aed', '#db2777', '#dc2626', '#ea580c', '#059669', '#0891b2', '#475569']

export function SettingsPage() {
  const { accent, setAccent } = useTheme()
  const [draftColor, setDraftColor] = useState(accent)
  const [showToast, setShowToast] = useState(false)
  const isValidColor = /^#[0-9a-f]{6}$/i.test(draftColor)

  useEffect(() => setDraftColor(accent), [accent])

  const saveColor = () => {
    if (!isValidColor) return
    setAccent(draftColor)
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 2600)
  }

  return <div className="w-full"><PageHeader eyebrow="Application" title="Pengaturan" description="Atur theme dan warna aksen yang digunakan di seluruh dashboard."/><div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]"><Panel><div className="flex items-center gap-3 border-b border-slate-200/80 p-5 dark:border-white/10"><span className="rounded-xl bg-brand-50 p-2 text-brand-600 dark:bg-brand-500/15"><Palette size={18}/></span><div><h2 className="font-semibold">Warna aksen</h2><p className="text-xs text-slate-500">Pilih warna, lihat preview, kemudian simpan perubahan.</p></div></div><div className="grid gap-6 p-5 sm:grid-cols-[minmax(220px,320px)_1fr]"><AccentColorPicker color={draftColor} onChange={setDraftColor}/><div><label className="text-[13px] font-medium">Kode HEX<input className={`mt-2 h-10 w-full rounded-xl border bg-transparent px-3 text-[13px] outline-none focus:ring-2 ${isValidColor?'border-slate-200/80 focus:border-brand-500 focus:ring-brand-500/15 dark:border-white/10':'border-rose-400 focus:ring-rose-400/15'}`} value={draftColor} onChange={(event)=>setDraftColor(event.target.value)}/></label>{!isValidColor&&<p className="mt-1.5 text-[11px] text-rose-500">Gunakan format HEX enam digit, misalnya #2563eb.</p>}<p className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Preset warna</p><div className="flex flex-wrap gap-2">{presets.map((color)=><button key={color} type="button" aria-label={`Pilih warna ${color}`} onClick={()=>setDraftColor(color)} className={`size-8 rounded-full border-2 transition-transform hover:scale-110 ${draftColor.toLowerCase()===color?'border-slate-900 dark:border-white':'border-transparent'}`} style={{backgroundColor:color}}/>)}</div><div className="mt-7 rounded-2xl border border-slate-200/80 p-4 dark:border-white/10"><p className="text-[11px] text-slate-500">Preview</p><div className="mt-3 flex items-center gap-3"><span className="size-9 rounded-xl" style={{backgroundColor:isValidColor?draftColor:accent}}/><button type="button" className="rounded-xl px-4 py-2 text-[13px] font-medium text-white" style={{backgroundColor:isValidColor?draftColor:accent}}>Primary button</button></div></div></div></div><div className="flex justify-end border-t border-slate-200/80 p-5 dark:border-white/10"><motion.button type="button" whileTap={{scale:0.97}} disabled={!isValidColor||draftColor.toLowerCase()===accent.toLowerCase()} onClick={saveColor} className="flex h-10 items-center gap-2 rounded-xl bg-brand-600 px-4 text-[13px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-45"><Save size={16}/>Simpan warna</motion.button></div></Panel><Panel className="h-fit"><div className="flex items-center gap-3 border-b border-slate-200/80 p-5 dark:border-white/10"><span className="rounded-xl bg-slate-100 p-2 text-slate-500 dark:bg-white/5"><SwatchBook size={18}/></span><div><h2 className="font-semibold">Tentang appearance</h2><p className="text-xs text-slate-500">Konfigurasi bawaan template.</p></div></div><div className="space-y-4 p-5 text-[13px] leading-5 text-slate-500"><p>Pilihan warna disimpan di browser dan digunakan untuk tombol, link, navigation state, focus ring, serta visualisasi data.</p><p>Mode terang, gelap, dan sistem dapat diganti melalui control di bagian kanan atas.</p><div className="rounded-xl bg-brand-50 p-4 text-brand-700 dark:bg-brand-500/10 dark:text-brand-100">Halaman ini adalah fitur inti template. Jangan hapus jika color customization masih digunakan.</div></div></Panel></div><AnimatePresence>{showToast&&<motion.div role="status" initial={{opacity:0,y:18,scale:0.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10,scale:0.98}} className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-2xl border border-emerald-200/80 bg-white/95 px-4 py-3 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-emerald-500/20 dark:bg-[#1b1e24]/95 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_40px_-18px_rgba(0,0,0,0.95)]"><span className="rounded-xl bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"><CheckCircle2 size={18}/></span><div><p className="text-[13px] font-semibold">Warna berhasil disimpan</p><p className="text-[11px] text-slate-500">Aksen dashboard telah diperbarui.</p></div></motion.div>}</AnimatePresence></div>
}
