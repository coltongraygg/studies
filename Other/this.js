/**
 * 1. Global Context
 * 2. Function Context
 * 3. Object Method Context
 * 4. Constructor Context
 * 5. Event Handlers
 * 6. Arrow Functions
 */

// 1. Global Context:
// In the global scope, 'this' refers to the global object (window in browsers, global in Node.js).

console.log(this === window); // true (in a browser)

var globalVar = "I'm global";
console.log(this.globalVar); // "I'm global"

// 2. Function Context:
// In a regular function, 'this' depends on how the function is called.

function showThis() {
  console.log(this);
}

showThis(); // window (in non-strict mode) or undefined (in strict mode)

// 3. Object Method Context:
// When a function is called as a method of an object, 'this' refers to the object.

const obj = {
  name: "My Object",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

obj.greet(); // "Hello, My Object"

// 4. Constructor Context:
// When a function is used as a constructor with the 'new' keyword, 'this' refers to the newly created instance.

function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // "John"

// 5. Event Handlers:
// In event handlers, 'this' typically refers to the element that received the event.

/*
document.getElementById("myButton").addEventListener("click", function() {
  console.log(this); // The button element
});
*/

// 6. Arrow Functions:
// Arrow functions don't have their own 'this' binding. They inherit 'this' from the enclosing scope.

const objArrow = {
  name: "My Object",
  greet: () => {
    console.log("Hello, " + this.name);
  }
};

objArrow.greet(); // "Hello, undefined" (this refers to the global object)

