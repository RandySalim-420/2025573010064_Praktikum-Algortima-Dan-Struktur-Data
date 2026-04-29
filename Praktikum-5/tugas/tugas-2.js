function fn_O1(n) {

    return n + 1;
}

function fn_On(n) {

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

function fn_OnLogn(n) {

    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            count++;
        }
    }

    return count;
}

function fn_On2(n) {

    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }

    return count;
}

function benchmarkSemua(ukuranData) {
    for (let n of ukuranData) {
        console.log(`\n=== Ukuran n = ${n} ===`);

        console.time("O(1)");
        fn_O1(n);
        console.timeEnd("O(1)");

        console.time("O(n)");
        fn_On(n);
        console.timeEnd("O(n)");

        console.time("O(n log n)");
        fn_OnLogn(n);
        console.timeEnd("O(n log n)");

        console.time("O(n^2)");
        fn_On2(n);
        console.timeEnd("O(n^2)");
    }
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);

