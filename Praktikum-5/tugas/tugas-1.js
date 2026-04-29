function intersectionSlow(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                break;
            }
        }
    }

    return result;
}


function intersectionFast(arr1, arr2) {
    const set = new Set(arr1);
    const result = [];

    for (let num of arr2) {
        if (set.has(num)) {
            result.push(num);
        }
    }

    return result;
}

function groupAnagrams(arr) {

    const map = new Map();

    for (let word of arr) {
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
}

function checkSquareSumSlow(arr) {

    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (i !== j && j !== k && i !== k) {
                    if (arr[i] + arr[j] === arr[k] * arr[k]) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

function checkSquareSumFast(arr) {

    const sorted = [...arr].sort((a, b) => a - b);
    const n = sorted.length;

    for (let k = 0; k < n; k++) {
        const target = sorted[k] * sorted[k];

        let left = 0;
        let right = n - 1;

        while (left < right) {
            if (left === k) left++;
            if (right === k) right--;

            const sum = sorted[left] + sorted[right];

            if (sum === target) return true;
            if (sum < target) left++;
            else right--;
        }
    }

    return false;
}

console.log("=== TEST ===");

console.log(intersectionSlow([1, 2, 3], [2, 3, 4]));
console.log(intersectionFast([1, 2, 3], [2, 3, 4]));

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

console.log(checkSquareSumSlow([3, 4, 5]));
console.log(checkSquareSumFast([3, 4, 5]));

console.log(checkSquareSumFast([9, 16, 5, 4]));

function generateArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 1000));
    }
    return arr;
}

const bigArr1 = generateArray(10000);
const bigArr2 = generateArray(10000);
const bigArr3 = generateArray(2000);

console.log("\n=== BENCHMARK FUNGSI A ===");
console.time("Intersection Slow");
intersectionSlow(bigArr1, bigArr2);
console.timeEnd("Intersection Slow");

console.time("Intersection Fast");
intersectionFast(bigArr1, bigArr2);
console.timeEnd("Intersection Fast");

console.log("\n=== BENCHMARK FUNGSI B ===");
const words = Array.from({ length: 10000 }, () =>
    Math.random().toString(36).substring(2, 7)
);

console.time("Group Anagrams");
groupAnagrams(words);
console.timeEnd("Group Anagrams");

console.log("\n=== BENCHMARK FUNGSI C ===");
console.time("Square Sum Slow");
checkSquareSumSlow(bigArr3);
console.timeEnd("Square Sum Slow");

console.time("Square Sum Fast");
checkSquareSumFast(bigArr3);
console.timeEnd("Square Sum Fast");

