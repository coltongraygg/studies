// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype = {
//     constructor: Dog,
//     bark: function () { console.log('ruff ruff') }
// }

// var rover = new Dog('red rover');

// rover.bark(); // ruff ruff

// function Hat() {
//     var brand = 'shhhh can't tell';
// }
// var myHat = new Hat();
// console.log(myHat.brand); // undefined


// This keyword refers to the object that is being created

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.Fullname = function () { return firstName + ' ' + lastName };
// }
// const maddie = new Person('madeline', 'catsby');
// console.log(maddie.firstName); // Madeline

// function Person (firstName, lastName) {
//     this.fullName = function () { return firstName + ' ' + lastName };
// }
// const maddie = new Person("madeline", 'catsby');
// console.log(maddie.firstName); // undefined

// console.log((function (x, y) { return x + y } ) (3, 4)); // 7

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function () {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// // const crazyPants = new Person ('crazy', 'pants');
// // crazyPants.fullName();


// function Raisin() {
//     this.formerSelf = 'grape';
//     this.goodness = function (number) {
//         return "I am " + number + ' times worse than when I was a ' + this.formerSelf
//     };
// }
// var r = new Raisin();
// console.log(r.goodness);

// // Returns function definition