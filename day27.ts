// Write a function which takes a input string s and return a string in the following way:
// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are: a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input(undefined / null / integer) should return an empty string

// Source => https://www.codewars.com/kata/59e49b2afc3c494d5d00002a

export function sortVowels(str?: number | string | null): string {
    const vowel = "aiueoAIUEO".split("")
    return typeof str === "string" ? str.split("").map((word: string) => vowel.indexOf(word) !== -1 ? `|${word}` : `${word}|`).join("\n") : ""
};

// TEST
console.log(sortVowels('Codewars')) // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
console.log(sortVowels('Is RubY dEad?')) // '|I\ns|\n |\nR|\n|u\nb|\nY|\n |\nd|\n|E\n|a\nd|\n?|');
console.log(sortVowels('yo!')) // 'y|\n|o\n!|');
console.log(sortVowels('LOrEm IpsUm dOlOr sIt AmEt')) // 'L|\n|O\nr|\n|E\nm|\n |\n|I\np|\ns|\n|U\nm|\n |\nd|\n|O\nl|\n|O\nr|\n |\ns|\n|I\nt|\n |\n|A\nm|\n|E\nt|');