// Your task is to convert strings to how they would be written by Jaden Smith.The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Source => https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function (): string {
    return this.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
}


interface String {      // Declaration needed, don't remove it
    toJadenCase(): string;
}

// TEST
console.log("How can mirrors be real if our eyes aren't real".toJadenCase()) // "How Can Mirrors Be Real If Our Eyes Aren't Real"