// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.If that value has more than one digit, continue reducing in this way until a single - digit number is produced.The input will be a non - negative integer.

// Source => https://www.codewars.com/kata/541c8630095125aba6000c00

export const digitalRoot = (n: number): number => {
    let numStr = n.toString()
    let res = n
    while (numStr.length > 1) {
        res = numStr.split("").reduce((a, b) => a + Number(b), 0);
        numStr = res.toString()
    }
    return res
}

// TEST
console.log(digitalRoot(16)) // 7
console.log(digitalRoot(942)) // 6
console.log(digitalRoot(132189)) // 6
console.log(digitalRoot(493193)) // 2
