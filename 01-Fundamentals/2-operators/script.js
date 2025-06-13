// + - * /
const year = 2025;
const myYear = 2003;
const addAge = year + myYear;
const subAge = year - myYear;
const multAge = year * myYear;
const divAge = year / myYear;

console.log(addAge);
console.log(subAge);
console.log(multAge);
console.log(divAge);

// Different between comma (,) and plus (+) and format (`${}`)
const age = 23;
console.log("My age:", age); // My age is string, using comma (,) the age it display number or integer
console.log("My age: " + age); // My age is string, using plus (+) the age it display string

const x = 10;
console.log(x * 2, x / 10, 2 ** 3); // all number not string

const firstname = "Salih";
const lastname = "Abdulmanan";
console.log(firstname + " " + lastname);
console.log(`My firstname ${firstname} and lastname ${lastname}`);

// Assignment Operators
// +=, -=, *=, ++, --
let firstAssignmet = 10 + 2; // 12
firstAssignmet += 10; // firstAssignment = firstAssignment + 10
console.log("Using this +=: " + firstAssignmet);

let firstIncrement = 1;
firstIncrement++; // firstIncrement = firstIncrement + 1
console.log("Using this ++: " + firstIncrement);

let firstDecrement = 10;
firstDecrement--; // firstDecrement = firstDecrement + 10
console.log("Using this --: " + firstIncrement);

// Comparison Operators
// >, <, >=, <=
const cash = 200;
const balance = 500;

console.log(cash < balance); // true
// We can use this in if else statement

//
