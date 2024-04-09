// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".Your function receives one side of the DNA(string, except for Haskell); you need to return the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).

// Source => https://www.codewars.com/kata/554e4a2f232cdd87d9000038

export class Kata {
    static dnaStrand(dna: string) {
        return dna.split("").map((e: string) => e === "A" ? "T" : e === "T" ? "A" : e === "C" ? "G" : "C").join("")
    }
}

// TEST
console.log(Kata.dnaStrand("AAAA")) // "TTTT"
console.log(Kata.dnaStrand("ATTGC")) // "TAACG"
console.log(Kata.dnaStrand("GTAT")) // "CATA" 