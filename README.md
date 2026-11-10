# 🏥 Dashboard Rekam Medis Pasien Klinik / Rumah Sakit

## 📌 Deskripsi Proyek

Dashboard Rekam Medis Pasien merupakan aplikasi berbasis web yang dibuat untuk mengelola data pasien pada klinik atau rumah sakit.

Aplikasi ini dikembangkan sebagai tugas **Responsi 1 Pemrograman Fullstack** Universitas 'Aisyiyah Yogyakarta dengan menggunakan React JS 19 dan Vite.

Sistem ini membantu administrator dalam mengelola informasi pasien, mulai dari nomor rekam medis, nama pasien, poliklinik tujuan, dokter penanggung jawab, tanggal kunjungan, hingga status penanganan pasien.

## 🎯 Tujuan Proyek

1. Membuat dashboard admin yang interaktif dan responsif.
2. Menerapkan fitur CRUD (Create, Read, Update, Delete).
3. Mengimplementasikan materi HTML, CSS, Bootstrap, JavaScript, DOM Manipulation, jQuery, dan React JS.
4. Mempermudah pengelolaan data pasien melalui tampilan dashboard.

## ✨ Fitur Aplikasi

- **Dashboard Statistik:** Menampilkan jumlah total pasien, pasien menunggu, pasien dalam penanganan, dan pasien selesai.
- **Tambah Pasien:** Menambahkan data pasien baru.
- **Tampilkan Pasien:** Menampilkan daftar pasien dalam bentuk tabel.
- **Edit Pasien:** Mengubah informasi data pasien.
- **Hapus Pasien:** Menghapus data pasien.
- **Pencarian Pasien:** Mencari pasien berdasarkan nomor rekam medis, nama, poliklinik, dokter, atau status.
- **Status Penanganan:** Menampilkan status Menunggu, Dalam Penanganan, dan Selesai.
- **Responsive Design:** Tampilan menyesuaikan ukuran layar desktop, tablet, dan mobile.

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Struktur halaman aplikasi |
| CSS3 | Mengatur tampilan dan desain |
| Bootstrap 5 | Membantu layout dan komponen responsif |
| JavaScript | Mengelola logika aplikasi |
| DOM Manipulation | Mengelola elemen halaman |
| jQuery | Membuat animasi notifikasi |
| React JS 19 | Membangun komponen dan mengelola state |
| Vite | Menjalankan development server |
| Lucide React | Menampilkan ikon aplikasi |

## 📂 Struktur Folder

```text
dashboard-rekam-medis/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Navbar.jsx
│   │   ├── PatientTable.jsx
│   │   └── PatientModal.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Cara Instalasi dan Menjalankan Aplikasi

**1. Clone Repository**

```bash
git clone URL_REPOSITORY_GITHUB
```

**2. Masuk ke Folder Proyek**

```bash
cd dashboard-rekam-medis
```

**3. Install Dependencies**

```bash
npm install
```

**4. Jalankan Aplikasi**

```bash
npm run dev
```

**5. Buka Aplikasi**

Buka alamat berikut melalui browser:

```text
http://localhost:5173
```

## 💾 Pengelolaan Data

Aplikasi menggunakan State dan Array lokal React untuk menyimpan data pasien sementara.

Data tidak menggunakan database backend SQL. Oleh karena itu, data yang ditambahkan, diedit, atau dihapus hanya berlaku selama aplikasi berjalan dan akan kembali ke data awal ketika halaman dimuat ulang.

## 📋 Identitas Mahasiswa

| Keterangan | Informasi |
|---|---|
| Nama | Axl Helguera |
| NIM | 2511501018 |
| Universitas | Universitas 'Aisyiyah Yogyakarta |
| Mata Kuliah | Pemrograman Fullstack |
| Tugas | Responsi 1 |
| Studi Kasus | Dashboard Rekam Medis Pasien Klinik / Rumah Sakit |

## 📝 Kesimpulan

Dashboard Rekam Medis Pasien Klinik / Rumah Sakit merupakan aplikasi pengelolaan data pasien berbasis web yang menerapkan konsep CRUD menggunakan React JS. Aplikasi ini mengintegrasikan HTML, CSS, Bootstrap, JavaScript, DOM Manipulation, jQuery, dan React JS sesuai materi perkuliahan Pemrograman Fullstack.

---

**Responsi 1 - Pemrograman Fullstack**  
Universitas 'Aisyiyah Yogyakarta
