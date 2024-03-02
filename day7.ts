// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Source => https://www.codewars.com/kata/5412509bd436bd33920011bc

export const maskify = (cc: string): string => cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4)

// TEST
console.log(maskify('4556364607935616')) // '############5616'
console.log(maskify('1')) // '1'
console.log(maskify('11111')) // '#1111'