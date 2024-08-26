/**
 * 1. Function Scope
 * 2. Block Scope
 * 3. Lexical Scope
 * 4. Closures
 * 5. Common Use Cases for Closures
 */

// 1. Function Scope:
// Variables declared inside a function are only accessible within that function.

function functionScope() {
    var insideVar = "I'm inside the function";
    console.log(insideVar); // "I'm inside the function"
  }
  
  functionScope();
  // console.log(insideVar); // ReferenceError: insideVar is not defined
  
  // 2. Block Scope:
  // let and const create block-scoped variables, while var is function-scoped.
  
  if (true) {
    var varVariable = "I'm var";
    let letVariable = "I'm let";
    const constVariable = "I'm const";
  }
  
  console.log(varVariable); // "I'm var"
  // console.log(letVariable); // ReferenceError
  // console.log(constVariable); // ReferenceError
  
  // 3. Lexical Scope:
  // Inner functions have access to variables in their outer scope.
  
  function outer() {
    const outerVar = "I'm from outer";
    
    function inner() {
      console.log(outerVar); // "I'm from outer"
    }
    
    inner();
  }
  
  outer();
  
  // 4. Closures:
  // A closure is created when a function retains access to its lexical scope when executed outside that scope.
  
  function createCounter() {
    let count = 0;
    return function() {
      return ++count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
  
  // 5. Common Use Cases for Closures:
  
  // a. Data privacy
  function createBank() {
    let balance = 0;
    return {
      deposit: function(amount) {
        balance += amount;
      },
      getBalance: function() {
        return balance;
      }
    };
  }
  
  const myBank = createBank();
  myBank.deposit(100);
  console.log(myBank.getBalance()); // 100
  // console.log(myBank.balance); // undefined
  
  // b. Function factories
  function multiplyBy(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = multiplyBy(2);
  const triple = multiplyBy(3);
  
  console.log(double(5)); // 10
  console.log(triple(5)); // 15
  
  // c. Implementing modules
  const myModule = (function() {
    let privateVar = "I'm private";
    
    function privateFunction() {
      console.log("This is a private function");
    }
    
    return {
      publicMethod: function() {
        console.log(privateVar);
        privateFunction();
      }
    };
  })();
  
  myModule.publicMethod();
  // console.log(myModule.privateVar); // undefined
  // myModule.privateFunction(); // TypeError
  
  /**
   * Key points to remember:
   * - Function scope is created for each function call.
   * - Lexical scope allows inner functions to access outer variables.
   * - Closures "close over" their lexical environment, retaining access to outer variables.
   * - Closures are powerful for data privacy, function factories, and module patterns.
   */