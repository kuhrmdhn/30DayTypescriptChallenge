// Complete the function which will return the area of a circle with the given radius.Returned value is expected to be accurate up to tolerance of 0.01.If the radius is not positive, throw Error.

// Source => https://www.codewars.com/kata/537baa6f8f4b300b5900106c

function circleArea(radius: number): number {
    if (radius <= 0) {
        throw new Error("Radius must positive!")
    }
    return Math.PI * radius ** 2;
}

// TEST
console.log(circleArea(1)) // 3.141
console.log(circleArea(43.2673)) // 5881.248
console.log(circleArea(68))  // 14526.724
console.log(circleArea(0)) // throw Error
console.log(circleArea(-1))  // throw Error