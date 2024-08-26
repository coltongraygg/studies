/**
 * LOOPS IN JAVASCRIPT
 * 
 * Loops are used to repeat a block of code multiple times.
 * 
 * Imagine you are doing exercises. You might do 10 push-ups, then 10 sit-ups, and so on. Loops in JavaScript help you automate such repetitive tasks.
 * 
 * There are several types of loops:
 * 
 * 1. While Loop - This loop continues to execute as long as a specified condition is true.
 * 
 * 2. For Loop - This loop executes a block of code a specific number of times.
 * 
 * 3. For-In Loop - This loop iterates over the properties of an object.
 * 
 */


// WHILE LOOP

// The while loop continues to execute as long as the condition is true.
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// FOR LOOP

// The for loop executes a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log("i is: " + i);
}

// Looping backward from a limit to 0
for (let i = 5; i >= 0; i--) {
    console.log("i is: " + i);
}

// Looping over an array forwards
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);
}

// Looping over an array backwards
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log("Fruit: " + fruits[i]);
}

// FOR-IN LOOP

// The for-in loop iterates over the properties of an object.
let person = { name: "Alice", age: 25, city: "Wonderland" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// In the for-in loop:
// - The loop iterates over each property in the object.
// - The key variable holds the name of the current property.
// - The value of the current property is accessed using person[key].