// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.
// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Source => https://www.codewars.com/kata/5a4d303f880385399b000001

export const strongNumber = (num: number): string => {
    const factorial = (n: number): number => {
        if (n === 1 || n === 0) {
            return 1
        } else {
            return factorial(n - 1) * n
        }
    }
    return num.toString().split("").map(e => factorial(Number(e))).reduce((a, b) => a + b, 0) === num ? "STRONG!!!!" : "Not Strong !!";
};

// TEST
console.log(strongNumber(1)) // "STRONG!!!!"
console.log(strongNumber(2)) // "STRONG!!!!"
console.log(strongNumber(145)) // "STRONG!!!!"
console.log(strongNumber(7)) // "Not Strong !!"
console.log(strongNumber(93)) // "Not Strong !!"
console.log(strongNumber(185)) // "Not Strong !!"