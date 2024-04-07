// Your task is to write a function which returns the n - th term of the following series, which is the sum of the first n terms of the sequence(n is the input parameter).
// n
// 1 -- > 1 -- > "1.00"
// 2 -- > 1 + 1 / 4 -- > "1.25"
// 5 -- > 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 -- > "1.57"

// Source => https://www.codewars.com/kata/555eded1ad94b00403000071

export function SeriesSum(n: number): string {
    const series = (n: number) => 1 / (3 * n - 2)
    return [...Array(n)].map((e: undefined, i: number) => series(i + 1)).reduce((a, b) => a + b, 0).toFixed(2).toString()
}

// TEST
console.log(SeriesSum(1)) // "1.00"
console.log(SeriesSum(2)) // "1.25"
console.log(SeriesSum(3)) // "1.39"
console.log(SeriesSum(4)) // "1.49"