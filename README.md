# Koda

Koda adalah template dashboard universal untuk membangun aplikasi internal, admin panel, workspace, portal analitik, dan produk berbasis data.

Template sudah menyediakan application shell, navigasi responsif, dark mode, warna aksen yang dapat dipilih, animasi, tabel, statistik, timeline, pengaturan, dan contoh halaman generik. Semua data di frontend merupakan placeholder yang siap diganti dengan domain aplikasi Anda.

## Halaman template

- Template 01 — overview dan metric cards
- Template 02 — data table
- Template 03 — card grid
- Template 04 — form
- Template 05 — analytics
- Pengaturan — theme dan color customization bawaan

## Struktur

```text
Koda/
├── src/          # React frontend
├── backend/      # Express API starter
└── storage/      # placeholder penyimpanan lokal
```

Frontend dan backend merupakan package terpisah dalam satu pnpm workspace.

## Instalasi

```bash
pnpm install
```

## Menjalankan

Frontend saja:

```bash
pnpm dev
```

Backend saja:

```bash
cd backend
pnpm dev
```

Frontend dan backend bersamaan:

```bash
pnpm dev:all
```

## Membuat halaman baru

Contoh berikut membuat halaman `Reports` pada route `/reports`.

### 1. Buat feature dan page

Buat file `src/features/reports/ReportsPage.tsx`:

```tsx
import { PageHeader } from '../../components/ui/PageHeader'
import { Panel } from '../../components/ui/Panel'

export function ReportsPage() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Workspace"
        title="Reports"
        description="Description for this page."
        actionLabel="Create report"
      />

      <Panel>
        <div className="p-5">Page content</div>
      </Panel>
    </div>
  )
}
```

Komponen yang hanya digunakan halaman tersebut tetap disimpan di `src/features/reports/`.

### 2. Tambahkan menu

Buka `src/app/navigation.ts`, import ikon yang diperlukan, lalu tambahkan entry:

```tsx
import { BarChart3 } from 'lucide-react'

export const navigation = [
  // menu lain
  { label: 'Reports', path: '/reports', icon: BarChart3 },
]
```

### 3. Daftarkan route

Buka `src/app/routes.tsx`, lalu import page:

```tsx
import { ReportsPage } from '../features/reports/ReportsPage'
```

Tambahkan route di dalam route yang menggunakan `AppLayout`:

```tsx
<Route path="reports" element={<ReportsPage />} />
```

Menu `Reports` sekarang mengarah ke `/reports`. Halaman otomatis menggunakan sidebar, toolbar, theme, dan page transition.

### 4. Hapus template yang tidak diperlukan

1. hapus entry dari `src/app/navigation.ts`
2. hapus route dan import dari `src/app/routes.tsx`
3. hapus file terkait dari `src/features/templates/`

Jangan hapus `src/features/settings/SettingsPage.tsx` jika theme color picker masih digunakan. Halaman Pengaturan merupakan fitur inti, bukan halaman contoh.

### Lokasi penting

- `src/app/navigation.ts` — menu sidebar
- `src/app/routes.tsx` — route frontend
- `src/components/layout/` — application shell
- `src/components/ui/` — primitive UI bersama
- `src/features/` — page dan logic per feature
- `src/lib/api.ts` — HTTP client dasar

## Teknologi

React, TypeScript, Vite, Tailwind CSS, Motion for React, vanilla-colorful, Express, dan pnpm.
