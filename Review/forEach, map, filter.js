let app = {};
// DO NOT REMOVE CODE ABOVE /////////////////////////

/////////////////////////////////////////////////////
////////////// BOOTCAMP WEEK 4 - DAY 3 //////////////
////////// forEach, map, filter Checkpoint///////////
/////////////////////////////////////////////////////

const patients = [
  {
    name: "Abe Froman",
    age: 56,
    gender: "male",
    preexistingConditions: ["Heart disease", "High cholesterol"],
    allergies: [
      {
        type: 'Sunflower seeds',
        severity: 'Mild'
      },
      {
        type: 'Peanuts',
        severity: 'Serious'
      }
    ] 
  },
  {
    name: "Kendall Roy",
    age: 40,
    gender: "male",
    preexistingConditions: ["Depression", "Drug addiction"],
    allergies: [
      {
        type: 'Peanuts',
        severity: 'Serious'
      },
      {
        type: 'Penicilin',
        severity: 'Moderate'
      }
    ]
  },
  {
    name: "Leslie Knope",
    age: 45,
    gender: "female",
    preexistingConditions: ["High blood pressure", "High cholesterol"],
    allergies: [],
  },
  {
    name: "Adira",
    age: 18,
    gender: "non-binary",
    preexistingConditions: ["Symbiont"],
    allergies: [
      {
        type: 'Penicilin',
        severity: 'Mild'
      },
      {
        type: 'Shellfish',
        severity: 'Serious'
      }
    ]
  },
  {
    name: "Dee Reynolds",
    age: 44,
    gender: "female",
    preexistingConditions: ["Heart disease", "High blood pressure", "Alcoholism", "Drug addiction"],
    allergies: []
  }
];


/*
Directions: Use the native filter function to return a new array of only the patients that have more than 1 preexisting conditions.
*/

function preexistingConditions(patients) {
  return patients.filter(patient => patient.preexistingConditions.length > 1);
}

// console.log(preexistingConditions(patients));

/////////////////// PROBLEM #1 //////////////////////
/*
Directions: Use the native filter function to return an array of only patients that have no allergies.
 */

// function noAllergies(patients) {
//   return patients.filter(patient => patient.allergies.length === 0);
// }

let noAllergies = patients.filter(patient => patient.allergies.length === 0);

// console.log(noAllergies);
// console.log(noAllergies(patients));



/////////////////// PROBLEM #2 //////////////////////
/*
Directions: Use the native map function to return a new array where each value is a string of the patients name, age, gender, and the first preexisting condition in their preexisting conditions array like so: 
// name - age - gender - Drug addiction

[
"Abe Froman - 56 - male - Heart Disease", 
"Kendall Roy - 40 - male - Depression", 
]
 */


let report = patients.map(patient => patient.name + '  -  ' + patient.age + '  -  ' + patient.gender + '  -  ' + patient.preexistingConditions[0]);





/*
Use the native filter method to return a new array of only the patients who are allergic to Peanuts.
*/


let peanutAllergies = patients.filter(patient => {
  for (let allergy of patient.allergies) {
    if (allergy.type === 'Peanuts') {
      return true;
    }
  }
  return false;
});





/*
Use some combination of filter and map to return a new array of only the male patients who have drug addiction in their preexisting conditions array.
*/

let maleAddicts = patients.filter(patient => patient.gender === 'male' && patient.preexistingConditions.includes('Drug addiction'))
.map(patient => ({
  name: patient.name,
  age: patient.age,
  gender: patient.gender,
  preexistingConditions: patient.preexistingConditions,
  allergies: patient.allergies,
}));

// console.log(maleAddicts);







/////////////////// PROBLEM #3 //////////////////////
/*
Directions: Use the native forEach function to add "Omicron exposure" to the preexistingConditions property for every patient.
 */

let omicronExposure = patients.forEach(patient => patient.preexistingConditions += ', Omicron exposure');
// console.log(patients);




/////////////////// PROBLEM #4 //////////////////////
/*
Directions: Use the native filter method to return an array of only patients who have "Drug addiction" as one of their pre-existing conditions.
**Hint: use the array.includes() method in your callback function
 */

function drugAddiction(patients) {
  return patients.filter(patient => patient.preexistingConditions.includes('Drug addiction'));
}





/*
Use a combination of filter and map to return a new array of patient names for the patients who are over 40 and have high cholesterol.

[
  "Abe Froman", "Leslie Knope"
]
*/

let fourtyHighChol = patients.filter(patient => patient.age > 40 && patient.preexistingConditions.includes('High cholesterol')).map(patient => patient.name);
// console.log(fourtyHighChol);







/////////////////// PROBLEM #5 //////////////////////
/*
Directions: Use the native filter function to return a new array only the patients who have no allergies AND high cholesterol.
 */

let highCholNoAll = patients.filter(patient => patient.allergies.length === 0 && patient.preexistingConditions.includes('High cholesterol'));





/////////////////// PROBLEM #6 //////////////////////
/*
Directions: Use filter, map, and forEach to do the following -
 - return a new array of only the names of patients who have "High cholesterol" as one of their preexistingConditions and print the names of the patients to the console.
 */

let filteredPatients = patients.filter(patient => patient.preexistingConditions.includes('High cholesterol'))
.map(patient => ( {
  name: patient.name,
  age: patient.age,
  gender: patient.gender,
  preexistingConditions: patient.preexistingConditions,
  allergies: patient.allergies,
}))
.forEach(patient => console.log(patient.name));



