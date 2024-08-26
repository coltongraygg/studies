/**
 * VARIABLES IN JAVASCRIPT
 * 
 * Variables are used to store data that can be referenced and manipulated in a program. 
 * They act as containers for values and are essential for writing dynamic and flexible code.
 * 
 * Imagine you have a labeled jar where you can store different items. You can put something in the jar, take it out, or replace it with something else. 
 * Similarly, variables in JavaScript allow you to store, retrieve, and update data.
 * 
 * There are several key concepts related to variables:
 * 
 * 1. Declaration and Assignment - Creating a variable and assigning a value to it.
 * 
 * 2. var, let, const - Different ways to declare variables with varying scopes and mutability.
 * 
 * 3. Hoisting - The behavior of variable declarations being moved to the top of their scope.
 * 
 */


// DECLARATION AND ASSIGNMENT

// Declaration - Creating a variable without assigning a value.
let myVariable;

// Assignment - Assigning a value to a variable.
myVariable = 10;

// Declaration and assignment in one step.
let anotherVariable = 20;

// VAR, LET, CONST

// var - Declares a variable with function scope or global scope.
var globalVar = "I am a global variable";

// let - Declares a variable with block scope.
let blockScopedVar = "I am block-scoped";

// const - Declares a constant variable that cannot be reassigned.
const constantVar = "I cannot be changed";

// Example of block scope with let and const
if (true) {
    let blockVar = "I exist only in this block";
    const blockConst = "I also exist only in this block";
    console.log(blockVar); // "I exist only in this block"
    console.log(blockConst); // "I also exist only in this block"
}
// console.log(blockVar); // Error: blockVar is not defined
// console.log(blockConst); // Error: blockConst is not defined

// HOISTING

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Only the declarations are hoisted, not the initializations.

// Example with var
console.log(hoistedVar); // undefined (declaration is hoisted, but not the assignment)
var hoistedVar = "I am hoisted";

// Example with let and const
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
// console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
let hoistedLet = "I am not hoisted";
const hoistedConst = "I am also not hoisted";

// In summary:
// - var declarations are hoisted to the top of their scope and initialized with undefined.
// - let and const declarations are hoisted to the top of their scope but are not initialized, resulting in a ReferenceError if accessed before initialization.