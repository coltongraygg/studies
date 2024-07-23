/**
 * DATA TYPES IN JAVASCRIPT
 * 
 * Data types can be categorized into two sections: simple data types and complex data types. 
 * 
 * Imagine you have a box. You can put different things in this box like games, books, or even another smaller box with more things inside of that box. 
 * In JavaScript, we have similar "boxes" to store different kinds of stuff. These are called "data types."
 * 
 * There are two main kinds of data types:
 * 
 * 1. Simple (Primitive) Data Types - These are like single items you can put in your box, such as a book or a pencil. 
 * 
 * 2. Complex Data Types - These are like putting a smaller box inside your big box. This smaller box can hold many items at once, like a bunch of books or pencils.
 * 
 */


// SIMPLE DATA TYPES

// 1. String - A word or sentence. Anything that has quotes surrounding it. 
let favoriteBook = "The Old Man and the Sea";

// 2. Number - It's just like numbers you count.
let numberOfPencils = 24;
let weightOfoPencils = 2.5;

// 3. Boolean - True or false values. 
let isBoxFull = false;

// 4. Undefined - Imagine the box is empty right now, but it has space to place something inside of it.
let whatsInsideTheSmallBox;

// 5. Null - It's like saying the box is empty on purpose. There's room to put something in it, but it's supposed to be empty. 
let emptyBox = null;

// 6. NaN - A type of data that means Not a Number. This occurs when you're trying to do  a math operation that doesn't equate to an actual number. 
let badMath = 0/0;
console.log(badMath);

// 7. Ininity & -Infinity - Imagine you are performing an arithmetic calculation and the result has no bounds.
let veryLargeNumber = 1e308 // 1 followed by 308 zeroes
let resultOfLargeMultiply = veryLargeNumber * 2;
console.log(resultOfLargeMultiply);

// COMPLEX DATA TYPES

// 1. Object - Imagine a box where you can store different items, and each item has a label.
let userList = { user1: "Alice", user2: "Bob", user3: "Charlie" };

// 2. Array - It's like a row of boxes inside your big box. Each box can hold an item, and you number them to keep track using their indexes.
let favoriteColors = ["Red", "Green", "Blue"];

// 3. Function - It's similar to putting instructions in the box. When you open it the instructions, it tells your code something or does something to your code.
function sayHi(name) {
    return "Hi, " + name + "!";
  }

