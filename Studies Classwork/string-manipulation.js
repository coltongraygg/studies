/**
 * STRING MANIPULATION IN JAVASCRIPT
 * 
 * String manipulation involves modifying and working with strings to achieve desired outcomes. 
 * Strings are sequences of characters used to represent text.
 * 
 * Imagine you have a piece of paper with some text on it. You can cut, paste, and rearrange the text to create new sentences. 
 * Similarly, JavaScript provides various tools to manipulate strings.
 * 
 * There are two main ways to manipulate strings:
 * 
 * 1. With Operators - Using operators to concatenate or compare strings.
 * 
 * 2. With String Methods - Using built-in methods to perform various operations on strings.
 * 
 */


// STRING MANIPULATION WITH OPERATORS

// Concatenation (+) - Combining two or more strings into one.
let greeting = "Hello, " + "world!";
console.log(greeting); // "Hello, world!"

// Concatenation with variables
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// Comparison (==, ===) - Comparing two strings for equality.
let str1 = "apple";
let str2 = "apple";
let str3 = "banana";
console.log(str1 == str2); // true
console.log(str1 === str2); // true
console.log(str1 == str3); // false

// STRING MANIPULATION WITH STRING METHODS

let text = "JavaScript is awesome!";

// Length - Getting the length of a string.
console.log(text.length); // 21

// charAt() - Getting the character at a specific index.
console.log(text.charAt(0)); // "J"

// indexOf() - Finding the index of the first occurrence of a substring.
console.log(text.indexOf("is")); // 11

// lastIndexOf() - Finding the index of the last occurrence of a substring.
console.log(text.lastIndexOf("e")); // 18

// slice() - Extracting a part of a string.
console.log(text.slice(0, 10)); // "JavaScript"

// substring() - Extracting a part of a string (similar to slice).
console.log(text.substring(0, 10)); // "JavaScript"


// toUpperCase() - Converting a string to uppercase.
console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME!"

// toLowerCase() - Converting a string to lowercase.
console.log(text.toLowerCase()); // "javascript is awesome!"

// replace() - Replacing a substring with another substring.
console.log(text.replace("awesome", "great")); // "JavaScript is great!"

// split() - Splitting a string into an array of substrings.
let words = text.split(" ");
console.log(words); // ["JavaScript", "is", "awesome!"]

// trim() - Removing whitespace from both ends of a string.
let paddedText = "   Hello, world!   ";
console.log(paddedText.trim()); // "Hello, world!"

// includes() - Checking if a string contains a substring.
console.log(text.includes("JavaScript")); // true

// startsWith() - Checking if a string starts with a substring.
console.log(text.startsWith("Java")); // true

// endsWith() - Checking if a string ends with a substring.
console.log(text.endsWith("!")); // true

// repeat() - Repeating a string a specified number of times.
console.log("Ha! ".repeat(3)); // "Ha! Ha! Ha!"

