console.log('=== For Loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
 console.log(`Iterasi ke-${i}`);
}

console.log('\n=== While Loop: Countdown ===');
let hitung = 5;
while (hitung > 0) {
 console.log(`Hitung mundur: ${hitung}`);
 hitung--; 
}
console.log('Selesai!');

console.log('\n=== Bilangan Genap antara 1 - 20 ===');
for (let i = 1; i <= 20; i++) {
 if (i % 2 === 0) { 
 process.stdout.write(i + ' '); 
 }
}

console.log(''); 

console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 10; i++) {
 if (i === 4) {
 console.log(`Melewati angka ${i} (continue)`);
 continue; 
 }
 if (i === 8) {
 console.log(`Berhenti di angka ${i} (break)`);
 break; 
 }
 console.log(`Angka: ${i}`);
}