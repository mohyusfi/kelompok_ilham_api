const kelompok = [
    {
        nama: "MOH. YUSFI LAKHAFIDUN",
        nim: "F5512520089"
    },
    {
        nama: "Alfias",
        nim: "F55512520099"
    },
    {
        nama: "Ilham Arifin",
        nim: "F5512530109"
    },
    {
        nama: "Akhsan Maulana R.",
        nim: "F5512530114"
    },
    {
        nama: "Nefaldi",
        nim: "F5512520082"
    }
];

export const getAnggotaKelompok = () => {
    console.log('\nKelompok: ');
    kelompok.forEach((anggota) => console.log(`${anggota.nama}_${anggota.nim}`));
    console.log("\n");
}