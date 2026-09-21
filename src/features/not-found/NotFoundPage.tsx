import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f3f4f6] px-6 text-center dark:bg-[#0d0f13]">
      <div className="w-full max-w-md rounded-[24px] border border-slate-200/80 bg-white/85 p-10 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.55)] backdrop-blur-sm dark:border-white/10 dark:bg-[#1a1d23] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_18px_36px_-22px_rgba(0,0,0,0.95),0_4px_10px_-7px_rgba(0,0,0,0.9)]"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600">Error 404</p><h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Halaman tidak ditemukan</h1><p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">Alamat yang Anda buka tidak tersedia.</p><Link className="mt-7 inline-flex rounded-xl bg-brand-600 px-4 py-2.5 text-[13px] font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-brand-700" to="/">Kembali ke ringkasan</Link></div>
    </main>
  )
}
