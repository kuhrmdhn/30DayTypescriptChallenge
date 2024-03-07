// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Source => https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

export function duplicateEncode(word: string) {
    word = word.toLowerCase()
    return word.split("").map(e => word.indexOf(e) !== word.lastIndexOf(e) ? ")" : "(").join("")
}

// TEST
console.log(duplicateEncode("din")) // "((("
console.log(duplicateEncode("recede")) // "()()()"
console.log(duplicateEncode("Success")) // ")())())"
console.log(duplicateEncode("CodeWarrior")) // "()(((())())"
console.log(duplicateEncode("Supralapsarian")) // ")()))()))))()("
console.log(duplicateEncode("iiiiii")) // "))))))"