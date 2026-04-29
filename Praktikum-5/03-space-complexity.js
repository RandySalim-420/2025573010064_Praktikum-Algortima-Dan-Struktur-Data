function jumlahArray(arr) {
    let total = 0;
    for (const x of arr) total += x;
    return total;
}

function duplikasiArray(arr) {
    const baru = [];
    for (const x of arr) baru.push(x * 2);
    return baru;
}

function faktorialRekursif(n) {
    if (n <= 1) return 1;
    return n * faktorialRekursif(n - 1);
}

function faktorialIteratif(n) {
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i;
    return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Jumlah array :', jumlahArray(arr));
console.log('Duplikasi array:', duplikasiArray(arr));
console.log('Faktorial 10 rekursif :', faktorialRekursif(10));
console.log('Faktorial 10 iteratif :', faktorialIteratif(10));

function hitungUnik(arr) {
    const seen = new Set();
    for (const x of arr) seen.add(x);
    return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log('Elemen unik:', hitungUnik(dataAcak));



function cariPasanganLambat(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

function cariPasanganCepat(arr, target) {

    const seen = new Set();

    for (let num of arr) {
        const selisih = target - num;
        if (seen.has(selisih)) {
            return [selisih, num];
        }
        seen.add(num);
    }

    return null;
}

const testArr = [2, 7, 11, 15];
const target = 9;

console.log("Lambat:", cariPasanganLambat(testArr, target));
console.log("Cepat:", cariPasanganCepat(testArr, target));

function generateArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100000));
    }
    return arr;
}

const bigArr = generateArray(50000);
const bigTarget = -1;

function ukurWaktu(fn, arr, target) {
    const start = Date.now();
    fn(arr, target);
    const end = Date.now();
    console.log(`${fn.name} butuh waktu: ${end - start} ms`);
}

ukurWaktu(cariPasanganLambat, bigArr, bigTarget);
ukurWaktu(cariPasanganCepat, bigArr, bigTarget);

function cariPasanganLambat(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

function cariPasanganCepat(arr, target) {
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    const seen = new Set();

    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }

    return null;
}

const arrTest = [2, 7, 11, 15];
const targetTest = 9;

console.log("Lambat:", cariPasanganLambat(arrTest, targetTest)); // [2, 7]
console.log("Cepat:", cariPasanganCepat(arrTest, targetTest));   // [2, 7]

function generateArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 1000000));
    }
    return arr;
}

const bigArray = generateArray(50000);
const targetNotExist = -1; // kemungkinan besar tidak ada

console.time("Lambat (O(n^2))");
cariPasanganLambat(bigArray, targetNotExist);
console.timeEnd("Lambat (O(n^2))");

console.time("Cepat (O(n))");
cariPasanganCepat(bigArray, targetNotExist);
console.timeEnd("Cepat (O(n))");

// -> cariPasanganCepat jauh lebih efisien untuk data besar karena O(n) vs O(n^2).

// Trade-off:
// cariPasanganCepat:
// Membutuhkan memori tambahan untuk Set (O(n))