// "use strict";

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 354;

// Functions
function logger() {
  console.log("My name is Salih");
}
logger(); // calling / running / execute function
logger();

// () inside of this with apples, oranges called parameters
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const fruit = fruitProcessor(5, 1); // this values in parameter called arguments
console.log(fruit);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declarations vs Expressions

// This is function declarations
function calcuAge(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcuAge(2003);
console.log("Function Declaration:", age1);

// This is Function Expressions
const calcuAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcuAge2(2005);
console.log("Function Expression:", age2);

// Arrow Functions
const calcuAge3 = (birthYear) => 2025 - birthYear; // still function expression
const age3 = calcuAge3(2001);
console.log("Arrow Function:", age3);

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement} years`;
};
const retire = yearsUntilRetirement(1999, "Salih");
console.log(retire);

// Functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  // Instead of doing this:
  // const applePieces = apple * 4;
  // const orangePieces = orange * 4;
  // Dont Repeat Yourself

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(applePieces, orangePieces);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
console.log(fruitProcessor2(2, 3));

// Reviewing functions
const calculateAge = (birthYear) => 2025 - birthYear;

const calculateRetirement = (age) => 65 - age;

const resultYearsRetirement = (birthYear, firstname) => {
  const age = calculateAge(birthYear);
  const retirement = calculateRetirement(age);
  if (retirement > 0) {
    return `${firstname} retires in ${retirement} years`;
  } else {
    return `${firstname} has already retired`;
  }
};
console.log(resultYearsRetirement(2003, "Abdulmanan"));

// Practice
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphins = calcAverage(44, 23, 71);
let koalas = calcAverage(65, 54, 49);

dolphins = calcAverage(85, 54, 41);
koalas = calcAverage(23, 34, 27);

console.log(`
Score Dolphins: ${dolphins}   
Score Koalas: ${koalas}

`);

const checkwinner = (avgDol, avgKoa) => {
  if (avgDol >= 2 * avgKoa) {
    console.log(`Dolpins win (${avgDol} vs. ${avgKoa})`);
  } else if (avgKoa >= 2 * avgDol) {
    console.log(`Dolpins win (${avgDol} vs. ${avgKoa})`);
  } else {
    console.log(`No team wins.`);
  }
};
checkwinner(dolphins, koalas);

// Arrays

// Not recommended if you want more values
const friend1 = "Mohammad";
const friend2 = "Salih";
const friend3 = "Abdulmanan";

// Instead do this:
const friends = ["Mohammad", "Salih", "Abdulmanan"];
console.log(friends);

// Array is a function
// new keyword means you are creating a new array that had no values
const years = new Array(2000, 2001, 2002, 2003);
console.log(years);

// To get the exact values inside of arrays
// Take note arrays always start from 0 not 1
console.log(friends[0]); // it get Mohammad
console.log(friends[2]); // it get Abdulmanan

console.log(friends.length); // we have 3 values inside of friends array
console.log(friends[friends.length - 2]); // friends[3 - 2] = friends[1] it get the Salih

// To change or mutate or update the exact values inside of arrays
friends[1] = "Domangcag"; // Salih change into Domangcag
console.log(friends);

// Basic Array operations (Methods)
const friendsArray = ["Ali", "Salih", "Lili"];

// ADD methods
// .push() add value inside of array last value
friendsArray.push("Jay");
console.log(friendsArray);

// .unshift add value inside of array first value
friendsArray.unshift("John");
console.log(friendsArray);
// ADD methods

// REMOVE methods
// .pop() remove value inside of array last value
friendsArray.pop(); // remove the last value inside of array
console.log(friendsArray);

// .shift() remove value inside of array first value
friendsArray.shift();
console.log(friendsArray);
// REMOVE methods

// .indexOf() it tells you where the values exact index inside of array
const whereIndex = friendsArray.indexOf("Salih"); // Salih is in
console.log(whereIndex);

// .includes() it check if the value is included inside of array
const isIncluded = friendsArray.includes("Ali"); // true
const isIncluded2 = friendsArray.includes("Alesya"); // true
console.log("Ali is " + isIncluded + ", Alesya is " + isIncluded2);

friendsArray.push(24);
console.log(friendsArray);
console.log(friendsArray.includes("24")); // gives fales its a string
console.log(friendsArray.includes(24)); // true since its a number or integer

if (friendsArray.includes("Lili")) {
  console.log("Lili exist");
} else {
  console.log("Doesn't exist");
}

// Practice

const data = new Array(125, 555, 44);

const calcTip = () => {};
