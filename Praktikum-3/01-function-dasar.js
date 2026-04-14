function sapa() {
 console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa(); 
sapa(); 

function sapaNama(nama) {
 console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(angka1, angka2) {
 const hasil = angka1 + angka2;
 return hasil; 
}
const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13)); 

function hitung(nilai, pengali = 2) {
 return nilai * pengali;
}
console.log(hitung(5)); 
console.log(hitung(5, 3)); 

const pesanGlobal = 'Saya ada di mana saja';
function cekScope() {
 const pesanLokal = 'Saya hanya ada di dalam function ini'; 
 console.log(pesanGlobal); 
console.log(pesanLokal); 
}
cekScope();
console.log(pesanGlobal);

