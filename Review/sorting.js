// sort() = method used to sort elements of an array in place
//          sorts elements as strings in lexicographic order, not alphabetical order
//          lexicographic = (alphabet + numbers + symbols)


let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b)
console.log(numbers);

let people = [
    { name: 'Spongebob', age: 30, gpa: 2.7 },
    { name: 'Patrick', age: 27, gpa: 2.0 },
    { name: 'Squidward', age: 35, gpa: 3.3 },
    { name: 'Sandy', age: 27, gpa: 4.0 },
]

people.sort((a, b) => a.age - b.age);

console.log(people);

// sort lexicographically
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);