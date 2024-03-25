// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
// pyramid(0) => []
// pyramid(1) => [[1]]
// pyramid(2) => [[1], [1, 1]]
// pyramid(3) => [[1], [1, 1], [1, 1, 1]]

// Source => https://www.codewars.com/kata/515f51d438015969f7000013

export const pyramid = (n: number): Array<Array<Number>> => [...Array(n)].map((_, i) => [...Array(i + 1)].map(() => 1));

// TEST
console.log((pyramid(0))) // []
console.log((pyramid(1))) // [[1]]
console.log((pyramid(2))) // [[1], [1, 1]]
console.log((pyramid(3))) // [[1], [1, 1], [1, 1, 1]]