const dataMahasiswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Siti", nilai: 92 },
  { nama: "Andi", nilai: 68 },
  { nama: "Dewi", nilai: 75 },
  { nama: "Eko", nilai: 55 },
  { nama: "Rina", nilai: 40 }
];

const hitungStatistik = (arrMahasiswa) => {
  const statistik = arrMahasiswa.reduce((acc, curr, index, array) => {
    acc.total++;
    acc.sum += curr.nilai;
    acc.tertinggi = curr.nilai > acc.tertinggi ? curr.nilai : acc.tertinggi;
    acc.terendah = curr.nilai < acc.terendah ? curr.nilai : acc.terendah;
    
    if (index === array.length - 1) {
      acc.rataRata = acc.sum / acc.total;
    }
    return acc;
  }, { total: 0, sum: 0, tertinggi: -Infinity, terendah: Infinity, rataRata: 0 });

  delete statistik.sum;
  return statistik;
};

const filterLulus = (arrMahasiswa, batasLulus) => {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
};

const tambahGrade = (arrMahasiswa) => {
  return arrMahasiswa.map(mhs => {
    let grade;
    if (mhs.nilai >= 85) grade = 'A';
    else if (mhs.nilai >= 75) grade = 'B';
    else if (mhs.nilai >= 60) grade = 'C';
    else if (mhs.nilai >= 45) grade = 'D';
    else grade = 'E';
    
    return { ...mhs, grade };
  });
};

console.log("Data Nilai Mahasiswa");

const dataDenganGrade = tambahGrade(dataMahasiswa);
console.log("\nDaftar Mahasiswa Dan Nilainya");
dataDenganGrade.forEach((mhs, i) => {
  console.log(`${i + 1}. ${mhs.nama} | Nilai: ${mhs.nilai} | Grade: ${mhs.grade}`);
});

const stats = hitungStatistik(dataMahasiswa);
console.log("\nStatistik Nilai");
console.log(`Total Mahasiswa : ${stats.total}`);
console.log(`Rata-rata Nilai : ${stats.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi : ${stats.tertinggi}`);
console.log(`Nilai Terendah  : ${stats.terendah}`);

const lulus = filterLulus(dataMahasiswa, 70);
console.log("\nMahasiswa Lulus (KKM 70)");
lulus.forEach(mhs => {
  console.log(`- ${mhs.nama} (Lulus)`);
});