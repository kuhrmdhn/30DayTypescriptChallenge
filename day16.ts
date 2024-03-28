// Given a string s, your task is to return another string such that even-indexed and odd-indexed
// characters of s are grouped and the groups are space-separated. Even-indexed group comes as first,
// followed by a space, and then by the odd-indexed part.

// Source => https://www.codewars.com/kata/580755730b5a77650500010c

export const sortMyString = (s:string):string => s.split("").filter((e,i) => i % 2 === 0).join("") + " " + s.split("").filter((e,i) => i % 2 !== 0).join("")

// TEST
console.log(sortMyString("CodeWars")) // "CdWr oeas"
console.log(sortMyString("YCOLUE'VREER")) // "YOU'RE CLEVER"   