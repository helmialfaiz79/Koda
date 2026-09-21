import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-6 text-center dark:bg-[#111318]">
      <div><p className="text-sm font-semibold text-brand-600">404</p><h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Halaman tidak ditemukan</h1><p className="mt-3 text-slate-500 dark:text-slate-400">Alamat yang Anda buka tidak tersedia.</p><Link className="mt-6 inline-flex rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-700" to="/">Kembali ke dashboard</Link></div>
    </main>
  )
}
