// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0](array with a zero).

// Source => https://www.codewars.com/kata/5949481f86420f59480000e7

const oddOrEven = (array: number[]) => array.reduce((acc, prev) => acc + prev, 0) % 2 === 0 ? "even" : "odd"
// if you want to copy this function to codewars use below function
// export const oddOrEven = (array: number[]) => array.reduce((acc, prev) => acc + prev,0) % 2 === 0 ? "even" : "odd"


// TEST
console.log(oddOrEven([0])) // "even"
console.log(oddOrEven([0, 4, 1])) // "odd"
console.log(oddOrEven([0, -1, -5])) // "even"