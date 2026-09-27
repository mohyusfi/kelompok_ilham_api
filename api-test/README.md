# Bruno API Test Collection - c6_cuaca-kota.js

Koleksi pengujian API Bruno ini dibuat untuk menguji dan membandingkan dua endpoint Open-Meteo API yang digunakan pada program `c6_cuaca-kota.js`:
1. **Endpoint 1 (Geocoding API)**: `https://geocoding-api.open-meteo.com/v1/search`
2. **Endpoint 2 (Forecast Weather API)**: `https://api.open-meteo.com/v1/forecast`

---

## 📁 Struktur Berkas

```
api-test/
├── opencollection.yml          # Konfigurasi utama OpenCollection Bruno
├── environments/
│   └── OpenMeteo.yml           # Environment variabel (base URL, default cityName = Palu)
├── 1. Cari Lokasi Kota.yml     # Request endpoint 1 (Geocoding & variable chaining via bru.setEnvVar)
├── 2. Ambil Cuaca Kota.yml     # Request endpoint 2 (Weather Forecast & assertions)
└── README.md                   # Petunjuk penggunaan & perbandingan nilai
```

---

## 🛠️ Cara Mengubah Nilai Environment Variable (Editable)

Semua variabel environment di koleksi ini bersifat **100% editable** (tidak ada yang dikunci / read-only):
1. Di pojok kanan atas aplikasi Bruno, pastikan memilih environment **OpenMeteo**.
2. Klik ikon mata / gerigi di samping nama environment, lalu pilih **Configure** (atau klik titik tiga pada koleksi -> **Environments**).
3. Anda dapat langsung mengklik dan mengedit teks nilai variabel apa pun:
   - `cityName`: Ganti nama kota yang ingin diuji (contoh: `Palu`, `Jakarta`, `Makassar`, `Bandung`).
   - `latitude` / `longitude` / `timezone`: Koordinat awal atau hasil pencarian.
4. Klik **Save** untuk menyimpan perubahan.

---

## 🚀 Cara Menjalankan Request di Bruno

1. Buka aplikasi **Bruno** (versi 4.x).
2. Pilih menu **Open Collection**, lalu arahkan ke folder:
   `C:\Users\ggwpy\kuliah-sem2\matkul-api\c7-restfulApi\api-test`
3. Pilih environment **OpenMeteo** di pojok kanan atas.
4. **Jalankan Request 1 (`1. Cari Lokasi Kota`)**:
   - Klik **Send**.
   - URL: `{{geocodingBaseUrl}}/search?name={{cityName}}&count=1&language=id&countryCode=ID`
   - Bruno otomatis mencari kota sesuai `{{cityName}}`.
   - Script otomatis memperbarui variabel environment `latitude`, `longitude`, `timezone`, dll. dengan nilai terbaru melalui `bru.setEnvVar()`.
   - Periksa tab **Tests** (status 200 OK & validasi data).
5. **Jalankan Request 2 (`2. Ambil Cuaca Kota`)**:
   - Klik **Send**.
   - Bruno otomatis memakai koordinat dari environment (`{{latitude}}`, `{{longitude}}`, dll.).
   - Periksa tab **Tests** dan tab **Console** di Bruno untuk melihat data cuaca.

---

## 📊 Perbandingan Nilai: Terminal vs Bruno (Praktikum C.7)

Berikut perbandingan data respon antara eksekusi program `node c6_cuaca-kota.js "Palu"` dan pengujian menggunakan Bruno:

| Parameter | Output Terminal `c6_cuaca-kota.js` | Output Respon Bruno | Status Kesesuaian |
| :--- | :--- | :--- | :--- |
| **Lokasi** | `Kota Palu, Sulawesi Tengah` | `name: "Kota Palu", admin1: "Sulawesi Tengah"` | ✅ Cocok |
| **Koordinat** | `-0.90833, 119.87083` | `latitude: -0.90833, longitude: 119.87083` | ✅ Cocok |
| **Zona Waktu**| `Asia/Makassar` | `timezone: "Asia/Makassar"` | ✅ Cocok |
| **Status HTTP**| `200 OK` (via fetch) | `200 OK` | ✅ Cocok |
| **Data Cuaca**| `temperature_2m`, `humidity`, `wind` | Nilai di `res.body.current` identik secara real-time | ✅ Cocok |
