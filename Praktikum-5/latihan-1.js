// Fungsi A
function fnA(n) {
    return n * 2;
}
// Big O: O(1)
// Alasan: Operasi hanya 1 kali (konstan), tidak tergantung nilai n

// Fungsi B
function fnB(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
// Big O: O(n^2)
// Alasan: Nested loop (loop di dalam loop), masing-masing n → n * n = n^2

// Fungsi C
function fnC(n) {
    for (let i = 1; i < n; i *= 2) {
        console.log(i);
    }
}
// Big O: O(log n)
// Alasan: i dikali 2 setiap iterasi → jumlah iterasi log₂(n)

// Fungsi D
function fnD(arr) {
    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => {
                console.log(x, y, z);
            });
        });
    });
}
// Big O: O(n^3)
// Alasan: 3 nested loop → n * n * n = n^3

function hitungKompleksitas(n, fn) {
    const start = Date.now();

    if (fn === fnD) {
        const arr = Array.from({ length: n }, (_, i) => i);
        fn(arr);
    } else {
        fn(n);
    }

    const end = Date.now();
    console.log(`Waktu eksekusi ${fn.name}: ${end - start} ms`);
}


const n = 1000;

hitungKompleksitas(n, fnA);
hitungKompleksitas(n, fnB);
hitungKompleksitas(n, fnC);
hitungKompleksitas(n=50, fnD);

