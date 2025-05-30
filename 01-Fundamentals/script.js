// PRIMITIVE - it is not an object

// let, var, const
let emptyVariable; // undefined or null
let varName = "JavaScript"; // string
var myAge = 22; // number or integer
const isRobot = false; // boolean

// changing the value of varName, myAge using let and var
// we called here mutate or mutable
// emptyVariable = "Not empty";
varName = "CSS";
myAge = 25;

// in const you can't change the value of isRobot, display error
// we called here cannot be mutate or immutable
// isRobot = true;

// if else statement logic
if (varName === "JavaScript") {
  console.log("The varName is correct.");
} else {
  console.log("The varname is incorrect");
}

console.log(emptyVariable);
console.log(varName);
console.log(myAge);

// PRIMITIVE - it is not an object

// OPERATORS
const year = 2025;
const age = year - 2004;
const x = 10;

// different , and +
console.log("My age:", age); // My age is string, using comma (,) the age it display number or integer
console.log("My age: " + age); // My age is string, using plus (+) the age it display string
console.log(x * 2, x / 10, 2 ** 3);

const fname = "Salih";
const lname = "Abdulmanan";

console.log(fname + " " + lname);

// Assignment operators
let result = 10 + 5;
result += 10; // result = result + 5
result++;
result--;
result--;
console.log(result);

// Comparison operators
const myCash = 200;
const balance = 500;

console.log(myCash < balance); // >, <, >=, <=

// OPERATORS

const firstname = "Salih";
const lastname = "Abdulmanan";
const birth_year = 2004;
const year_now = 2025;

const myText = `I'm ${firstname} ${lastname}, a ${
  year_now - birth_year
} years old.`;

console.log(myText);

const yourAge = 18;
const isOldEnough = yourAge >= 18;

if (isOldEnough) {
  console.log("Adult");
} else {
  console.log("Too young");
}

const birthYear = 2003;
let century;

if (birthYear >= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // number, string
console.log(Number(inputYear) + 18);
console.log(Number("Salih")); // NaN means not a number
console.log(typeof NaN); // number
console.log(String(23), 23); // string, number

// Type Coercion
console.log("I am " + 23 + " years old"); // + convert as string
console.log("23" - "10" - 3); // - convert as number: result 10
console.log("23" / "2"); // / convert as number: result 11.5

let n = "1" + 2; // 12 because its string: string + number, the number will become as string
n -= 1; // n = 12 - 1 the 12 is string and 1 is number, the string 12 will become as number
console.log(n); // result 11

// 5 falsy values: 0, '', undefined, null, NaN

// Falsy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));

// Truthy
console.log(Boolean("Salih"));
console.log(Boolean({}));

const money = 0; // falsy cause of 0

if (money) {
  // false
  console.log("Don't spend it all ;)");
} else {
  // true
  console.log("You should get a job!");
}

let height; // falsy cause of ''

if (height) {
  // false
  console.log("YAY! Height is defined");
} else {
  // true
  console.log("Height is UNDEFINED");
}

// Equality operatos: == vs ===
const inputAge = 18;

// strict equality operator it does not perform coercion
// it only return true when both values are the same
if (inputAge === 18) console.log("You just became an adult (strict)");

// loose equality operator it does type of coercion
console.log("18" == 18); // 18 string converted to a number then number 18 is the same as number 18
if (inputAge == 18) console.log("You just became an adult (loose)");

// const num = Number(prompt("Enter number: "));
// console.log(num);
// console.log(typeof num);

// if (num === 23) {
//   console.log(`Same im ${num}`);
// } else if (num === 7) {
//   console.log("7 is a cool number");
// } else {
//   console.log(`Your input is not a number, please try again`);
// }

// if (num !== 23) console.log("why not 23?");

// Boolean Logic: AND, OR, NOT operators
// AND (&&) both must be true
// OR (||) one of them will be true: true OR false = true
// NOT (!) vice versa of true will be false

// Logical operators
let a = true;
let b = false;

if (a && !b) {
  console.log("&& A and B True");
}

if (a || b) {
  console.log("|| only A is true ");
}

if (!b) {
  console.log("! B is True");
}

// Practice
const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
  console.log("Dolphin win");
} else if (scoreDolphin < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win");
} else if (
  scoreDolphin === scoreKoalas &&
  scoreDolphin >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Draw");
} else {
  console.log("No one wins");
}

// Switch statement
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Starting of classes");
    break;
  case "tuesday":
    console.log("First assignment");
    break;
  case "wednesday":
  case "thursday":
    console.log("Study coding");
    break;
  case "friday":
    console.log("Praying time");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Starting of classes");
} else if (day === "tuesday") {
  console.log("First assignment");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Study coding");
} else if (day === "friday") {
  console.log("Praying time");
} else if (day === "saturday" || day === "sunday") {
  console.log("Weekend");
} else {
  console.log("Not a valid day");
}

// Statements and Expressions

// Expession means it does produce a value either string, number, boolean
3 + 4; // is an expression
2003; // is an expression
(true && false) || !false; // is an expression

// Statement is a full sentences that translate or actions,  it does not produce a value
if (23 > 18) console.log("23 is bigger"); // is an statement

// Conditional (Ternary) operator
const randomNumber = 55;

randomNumber >= 45
  ? console.log("This is true.")
  : console.log("This is false.");

const isItGreater = randomNumber >= 45 ? "True" : "False";
console.log(isItGreater);

// Practice
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(`
  Bill: ${bill} 
  Tip: ${tip} 
  Total: ${total}`);
