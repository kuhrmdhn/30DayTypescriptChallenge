// Write a method that takes an array of consecutive(increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array.And it will be always exactly one letter be missing.The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Source => https://www.codewars.com/kata/5839edaa6754d6fec10000a2/

export function findMissingLetter(array: string[]): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const arrStr = array.map((word: string) => word.toLowerCase());
    const start = alphabet.indexOf(arrStr[0]);
    const end = alphabet.indexOf(arrStr[arrStr.length - 1]);
    const slice = alphabet.slice(start, end + 1);
    const missingLetter = slice.find((letter: string) => !arrStr.includes(letter)) || "";

    const firstLetter = array[0];
    return firstLetter === firstLetter.toLowerCase() ? missingLetter : missingLetter.toUpperCase();
}

// TEST
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])) // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])) // 'P'