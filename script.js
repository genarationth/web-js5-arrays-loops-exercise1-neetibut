// Exercise 1

// 1.1
// - What is the length of the array?
// - Write a function called myAlphabetLength which console.logs the length of the array.

let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

function myAlphabetLength() {
  console.log(myAlphabet.length);
}

myAlphabetLength();

// 1.2
// - Console.log each item in the array. Also console.log the index for each planet.

let planets = ["earth", "mars", "mercury", "venus", "jupiter"];

for (let i = 0; i < 5; i++) {
  console.log(`${i} - ${planets[i]}`);
}

// 1.3
//  Console.log each item in this array

let myArr = [1, 2, "One", true];

for (let i = 0; i < myArr.length; i++) {
  console.log(`${myArr[i]}`);
}
