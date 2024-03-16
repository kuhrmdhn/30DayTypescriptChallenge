// Points are awarded for each match as follows:
// if x > y: 3 points(win)
// if x < y: 0 points(loss)
// if x = y: 1 point(tie)
// We need to write a function that takes this collection and returns the number of points our team(x) got in the championship by the rules given above.

// Source => https://www.codewars.com/kata/5bb904724c47249b10000131

export const points = (games: string[]): number => games.map(e => e[0] > e[2] ? 3 : e[0] == e[2] ? 1 : 0).reduce((a: number, b: number) => a + b, 0)

// TEST
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])) // 30
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])) // 10
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])) // 0
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])) // 15
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])) // 12