// Doubling of number

// const numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     newNumbers[i] = numbers[i] * 2;
//   }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

const numbers = [1, 2, 3, 4];

const newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);

console.log("The doubled numbers are", newNumbers);