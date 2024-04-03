// ISBN - 10 identifiers are ten digits long.The first nine characters are digits 0 - 9. The last digit can be 0 - 9 or X, to indicate a value of 10.
// An ISBN - 10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

// Source => https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

export function validISBN10(isbn: string): boolean {
    return isbn.replace(/[-\s]/g, "").length === 10 && [...isbn.replace(/[-\s]/g, "")].map((e, i) => (i === 9 && e === 'X') ? 10 : Number(e)).reduce((a, b, i) => a + b * (i + 1), 0) % 11 === 0;
}

// TEST
console.log(validISBN10("1112223339")) // true
console.log(validISBN10("048665088X")) // true
console.log(validISBN10("1293000000")) // true
console.log(validISBN10("1234554321")) // true
console.log(validISBN10("1234512345")) // false
console.log(validISBN10("1293")) // false
console.log(validISBN10("X123456788")) // false
console.log(validISBN10("ABCDEFGHIJ")) // false
console.log(validISBN10("XXXXXXXXXX")) // false
console.log(validISBN10("048665088XZ")) // false