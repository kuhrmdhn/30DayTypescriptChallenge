// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Source => https://www.codewars.com/kata/576bb71bbbcf0951d5000044

const countPositivesSumNegatives = (input: any) => input !== null && input.length !== 0 ? [input.filter((e: number) => e > 0).length, input.filter((e: number) => e < 0).reduce((a: number, b: number) => a + b, 0)] : []
// if you want to copy this function to codewars use below function
// export const countPositivesSumNegatives = (input: any) => input !== null && input.length !== 0 ? [input.filter((e: number) => e > 0).length, input.filter((e: number) => e < 0).reduce((a: number, b: number) => a + b, 0)] : []

// TEST
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8, -50]
console.log(countPositivesSumNegatives([])) // []
