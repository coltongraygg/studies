/**
 * CONTROL FLOW IN JAVASCRIPT
 * 
 * Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated. 
 * In JavaScript, control flow statements enable you to make decisions in your code, allowing it to behave differently based on different conditions.
 * 
 * Imagine you are driving a car. You encounter various traffic signals and signs that dictate your actions. 
 * Similarly, control flow statements in JavaScript act as these signals, guiding the execution of your code.
 * 
 * There are several types of control flow statements:
 * 
 * 1. If Statement - This is like a traffic light. If the light is green, you go; if it's red, you stop.
 * 
 * 2. Else-If Statement - This is like a traffic light with multiple conditions. If the light is green, you go; if it's yellow, you slow down; if it's red, you stop.
 * 
 * 3. Else Statement - This is like a default action. If none of the conditions are met, you take this action.
 * 
 * 4. Switch Statement - This is like a multi-way traffic signal. Depending on the signal, you take different routes.
 * 
 */


// IF STATEMENT

// If the condition is true, the code inside the if block will execute.
let trafficLight = "green";
if (trafficLight === "green") {
    console.log("Go!");
}

// ELSE-IF STATEMENT

// If the first condition is false, the else-if condition is checked. If it's true, the code inside the else-if block will execute.
trafficLight = "yellow";
if (trafficLight === "green") {
    console.log("Go!");
} else if (trafficLight === "yellow") {
    console.log("Slow down!");
}

// ELSE STATEMENT

// If none of the previous conditions are true, the code inside the else block will execute.
trafficLight = "red";
if (trafficLight === "green") {
    console.log("Go!");
} else if (trafficLight === "yellow") {
    console.log("Slow down!");
} else {
    console.log("Stop!");
}

// SWITCH STATEMENT

// The switch statement evaluates an expression and executes the code corresponding to the matching case.
let dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Wednesday":
        console.log("Midweek!");
        break;
    case "Friday":
        console.log("End of the work week!");
        break;
    default:
        console.log("It's just another day.");
}

// In the switch statement:
// - The expression (dayOfWeek) is evaluated once.
// - The value of the expression is compared with the values of each case.
// - If there is a match, the associated block of code is executed.
// - The break statement prevents the code from running into the next case.
// - The default case is executed if no matching case is found.