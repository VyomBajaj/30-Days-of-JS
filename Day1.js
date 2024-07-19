
// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var numVar = 24;
console.log(numVar); // Output: 24

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let strLet = "Hello, world I am Vyom Bajaj!";
console.log(strLet); // Output: Hello, world I am Vyom Bajaj!



// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const boolConst = false;
console.log(boolConst); // Output: false



// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num = 10; 
let str = "Vyom"; 
let bool = false; 
let obj = {name: "Vyom", Number : 18}; 
let arr = [1, 2, 3, 4, 5]; 

console.log(typeof num); // Output: number
console.log(typeof str); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object 



// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let first = "Value1";
console.log(first); // Output: Value1
first = "Value2";
console.log(first); // Output: Value2



// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constVar = "Constant";
console.log(constVar); // Output: Constant

// constVar = "New Value"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let numberType = 123;
let stringType = "This is a string";
let booleanType = true;
let objectType = { key: "value" };
let arrayType = [1, 2, 3, 4, 5];
let undefinedType;
let nullType = null;

console.log("Value: ", numberType, ", Type: ", typeof numberType);
// Output: Value:  <value of numberType>, Type: number

console.log("Value: ", stringType, ", Type: ", typeof stringType);
// Output: Value:  <value of stringType>, Type: string

console.log("Value: ", booleanType, ", Type: ", typeof booleanType);
// Output: Value:  <value of booleanType>, Type: boolean

console.log("Value: ", objectType, ", Type: ", typeof objectType);
// Output: Value:  <value of objectType>, Type: object

console.log("Value: ", arrayType, ", Type: ", typeof arrayType);
// Output: Value:  <value of arrayType>, Type: object (Arrays are a type of object in JavaScript)

console.log("Value: ", undefinedType, ", Type: ", typeof undefinedType);
// Output: Value:  <value of undefinedType>, Type: undefined

console.log("Value: ", nullType, ", Type: ", typeof nullType);
// Output: Value:  <value of nullType>, Type: object (This is a well-known quirk in JavaScript)

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let variable = "String";
console.log(variable); // Output: String
variable = "String2";
console.log(variable); // Output: String2

const constVariable = "I cannot be reassigned";
console.log(constVariable); // Output: I cannot be reassigned
// Uncommenting the next line will cause an error
// constVariable = "Attempting reassignment"; // Error: Assignment to constant variable.