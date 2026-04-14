const pangkat = (basis, eksponen) => {
  if (eksponen === 0) {
    return 1;
  }
  return basis * pangkat(basis, eksponen - 1);
};

const balikString = (str) => {
  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
};

const cekPalindrom = (str) => {
  const cleanStr = str.toLowerCase(); 
  const hasilBalik = balikString(cleanStr);
  
  return cleanStr === hasilBalik;
};

console.log("\nUji Pangkat");
console.log(`2 pangkat 3 = ${pangkat(2, 3)}`); 
console.log(`5 pangkat 2 = ${pangkat(5, 2)}`); 
console.log(`10 pangkat 0 = ${pangkat(10, 0)}`); 

console.log("\nUji Balik String");
const kataAsli = "Javascript";
console.log(`Asli: ${kataAsli} -> Terbalik: ${balikString(kataAsli)}`);
console.log(`Asli: halo -> Terbalik: ${balikString("halo")}`);

console.log("\nUji Palindrom");

const daftarKataBaru = [
  "tugas","malam","kasur rusak","makam"      
];

daftarKataBaru.forEach(kata => {
  const status = cekPalindrom(kata) ? "Adalah Palindrom" : "Bukan Palindrom";
  console.log(`"${kata}"`.padEnd(15) + `: ${status}`);
});