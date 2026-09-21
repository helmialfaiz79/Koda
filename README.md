# Koda

Koda adalah dashboard internal untuk mencatat dan mengelola penjualan, pelanggan, produk, serta pembayaran dalam satu tempat.

## Menjalankan proyek

Pastikan Node.js dan pnpm sudah tersedia, lalu jalankan:

```bash
pnpm install
pnpm dev
```

Frontend tersedia di `http://localhost:5173`. Untuk menjalankan API pada terminal terpisah:

```bash
pnpm dev:backend
```

API berjalan di `http://localhost:3001` dan dapat diperiksa melalui `GET /api/health`.

## Perintah

```bash
pnpm dev            # frontend development server
pnpm dev:backend    # backend development server
pnpm build          # production build frontend
pnpm build:backend  # compile backend
pnpm typecheck      # periksa TypeScript
pnpm lint           # periksa kualitas kode
```

Salin `.env.example` menjadi `.env` jika perlu mengubah konfigurasi lokal.

## Teknologi

React, TypeScript, Vite, Tailwind CSS, Express, dan SQLite.
