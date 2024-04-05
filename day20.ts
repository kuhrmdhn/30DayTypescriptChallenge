// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input - array like this:
// If the number has an integer square root, take this, otherwise square the number.

// Source => https://www.codewars.com/kata/57f6ad55cca6e045d2000627

export function squareOrSquareRoot(array: number[]): number[] {
    return array.map((e: number) => {
        const sqrt = Math.sqrt(e);
        return Number.isInteger(sqrt) ? sqrt : e * e;
    });
}

// TEST
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])) // [ 2, 9, 3, 49, 4, 1 ]
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1])) // [ 10, 10201, 25, 25, 1, 1 ]
console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6])) // [ 1, 4, 9, 2, 25, 36 ]