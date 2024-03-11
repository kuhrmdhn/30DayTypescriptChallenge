// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Source => https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

export const wave = (str: string): Array<string> => str.split("").map((e, i) => str.slice(0, i) + e.toUpperCase() + str.slice(i + 1)).filter(e => e !== str)

// TEST
console.log(wave("hello")) // ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

console.log(wave("codewars")) // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];

console.log(wave("")) // [];

console.log(wave("two words")) // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];

console.log(wave(" gap ")) // [" Gap ", " gAp ", " gaP "];