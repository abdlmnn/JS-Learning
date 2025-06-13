// Primitive - it is not an object

// variable = storing a value
var height = 180; // don't use it

let firstname = "Salih"; // can be change or mutable

const age = 22; // can't be change or immutable

// Datatypes
let thisUndefined; // undefined

let thisNaN = NaN; // Not a Number

let thisNumber = 25; // number or integer (23, 1.24)

let thisString = "Hello World"; // string (' ', " ")

let thisBoolean = true; // boolean (true or false)

let thisArray = [23, "Hi", false]; // array (number, string, bool, object, another array)

let thisObject = {
  myFirstname: "Salih",
  myAge: 22,
  isStudent: true,
  myThings: ["Notebook", "Pencil", "Ballpen"],
}; // object {}

// To print the output
console.log("This is how you print console.log()");

// Change the value of variable
// mostly uset let in order for you to change the value

let changeAbleVar = "This is the first value using let"; // make it string
console.log(changeAbleVar); // This is the first value

changeAbleVar = 2025; // instead of string we change it into number
console.log(changeAbleVar); // 2025 instead of a string

// lets use const
// using const we cannot change a value
const unChangeAble = "This variable cannot change the value using const";

// unChangeAble = 25; // uncomment this so you can see

console.log(unChangeAble); // This cannot be change
