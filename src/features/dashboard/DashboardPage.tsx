import { CircleCheck, PackageOpen, ReceiptText, Users } from 'lucide-react'

const cards = [
  { label: 'Total penjualan', value: 'Rp0', icon: ReceiptText },
  { label: 'Pesanan', value: '0', icon: CircleCheck },
  { label: 'Pelanggan', value: '0', icon: Users },
  { label: 'Produk aktif', value: '0', icon: PackageOpen },
]

export function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-7">
        <p className="mb-1 text-sm font-medium text-brand-600 dark:text-brand-500">Ringkasan</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Dashboard</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Pantau aktivitas penjualan dari satu tempat.</p>
      </div>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Ringkasan penjualan">
        {cards.map(({ label, value, icon: Icon }) => (
          <article key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/30 dark:border-white/10 dark:bg-[#1b1e25] dark:shadow-none">
            <div className="mb-5 flex items-center justify-between"><p className="text-sm text-slate-500 dark:text-slate-400">{label}</p><span className="rounded-lg bg-slate-100 p-2 text-slate-600 dark:bg-white/5 dark:text-slate-300"><Icon size={18} /></span></div>
            <p className="text-2xl font-semibold tracking-tight">{value}</p>
          </article>
        ))}
      </section>
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/30 dark:border-white/10 dark:bg-[#1b1e25] dark:shadow-none">
        <h2 className="font-semibold">Pondasi siap</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">Struktur aplikasi, navigasi, tema, dan API dasar sudah tersedia. Data akan tampil di sini setelah modul penjualan ditambahkan.</p>
      </section>
    </div>
  )
}
