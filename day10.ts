// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.You can guarantee that input is non - negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Source => https://www.codewars.com/kata/526571aae218b8ee490006f4

export const countBits = (n: number): number => n.toString(2).replace(/0/g,"").length

// TEST
console.log(countBits(9)) // 2
console.log(countBits(10)) // 2
console.log(countBits(26)) // 3
console.log(countBits(77231418)) // 14
console.log(countBits(12525589)) // 11
console.log(countBits(3811)) // 8