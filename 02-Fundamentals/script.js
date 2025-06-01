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

// const data = new Array(125, 555, 44);
const data = [125, 555, 44];

// function that calculate the tip
const calcTip = (data) => {
  return data <= 300 && data >= 50 ? data * 0.15 : data * 0.2;
};
// if we console.log our calcTip it return NaN which not a number
console.log(calcTip(data)); // NaN

// we get the exact indexes in calcTip so we can use them to calcTotal
// all the data of calcTip inside of another array called tip that had specific indexes
const tip = [calcTip(data[0]), calcTip(data[1]), calcTip(data[2])];

// function calculate the total and return an array
const calcTotal = (data) => {
  return [data[0] + tip[0], data[1] + tip[1], data[2] + tip[2]];
};

console.log("Data:", data);
console.log("CalcTip:", tip);
console.log("CalcTotal:", calcTotal(data));

// Objects defines key and value pairs

const salih = {
  firstname: "Salih",
  lastname: "Abdulmanan",
  age: 2025 - 2003,
  sports: ["Basketball", "Football", "Volleyball"],
  exes: {
    nadine: {
      age: "17",
      personality: ["kind", "lovable", "respectful"],
    },
  },
};
console.log(salih);

// Dot vs Bracket notation

// if you want to display the firstname and lastname
console.log("Fullname:", salih.firstname, salih.lastname);

// if you have array inside of your object and try to display it
console.log("My sports:", salih.sports[0]);

// if you have another object inside of your object and try to display it
console.log("Another object inside of Salih object:", salih.exes.nadine.age);
console.log(
  "Another object but has array inside of Salih object:",
  salih.exes.nadine.personality[2]
);

// Practice
const input = prompt(
  "What do you want to know about Salih? Choose between firstname, lastname, age, sports, and exes"
);

const display = (input) => {
  if (input === "firstname") {
    console.log("This is the firstname of", salih.firstname);
  } else if (input === "") {
    console.log("Please fill up!");
  } else {
    console.log("Invalid choices, please try again!");
  }
};
console.log(input);
display(input);
