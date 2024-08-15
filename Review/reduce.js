var nums = [1, 2, 3, 4];

// native map method to return an array of every value multiplied by 10
let multiplied = nums.map(function(num) {
    return num * 10;
});

// use filter to return a new array of only the even numbers
let evens = nums.filter(function(num) {
    return num % 2 === 0;
});

// use reduce to return sum of every value in nums
let sum = nums.reduce(function(accumulator, current) {
    accumulator += current;

    return accumulator;

}, /* seed */ );

// callback for reduce
    // accumulator => the current state of what you're trying to return
    // current => the current item in the array we're accessing 


    // use reduce to return a new array of every number multiplied by 10
let reduceMultiplied = nums.reduce(function(acc, current) {
        // acc = [] // current 1
        acc.push(current * 10);

        return acc;
        
    }, [] /*seed*/);


    // invoke nums.reduce()
    // let output;
    // if ([] === undefined)
        // else
            // output = []
            // for loop
                // i = 0
                    // output = func([], 1));




const students = [
    { name: 'Steph', course: 'Bootcamp' },
    { name: 'Beth', course: 'Bootcamp' },
    { name: 'Colton', course: 'Bootcamp' },
    { name: 'Jeff', course: 'Precourse' },
];

let beth = students.reduce(function(acc, current) {
    if (current.name === 'Beth') {
        return current;
    }
    return acc;


});

let youngest = students.reduce(function(acc, current) {
    if (current.age < acc.age) {
        return current;
    }
    return acc;

});





const patients = [
    {
      name: "Abe Froman",
      age: 56,
      gender: "male",
      preexistingConditions: ["High cholesterol"],
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
  
  
  
  /////////////////////// PROBLEM #1 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return the number of patients who are over 40.
   */
  
  let patientsOver40 = patients.reduce(function(acc, current) {
    if (current.age > 40) {
        acc += 1;
    }
    return acc;
  }, 0)
  
  
  let patientsOver402 = patients.reduce((acc, current) => {
    if (current.age > 40) {
      acc += 1;
    }
    return acc;
  }, 0)

  console.log(patientsOver402); // 3
  console.log(patientsOver40); // 3
  
  
  function reduce(array, func, seed){
    let result;
    if (seed === undefined){
      result = array[0];
      for (let i = 1; i < array.length; i++){
        result = func(result, array[i], i, array);
      }
    } else {
      result = seed; 
      for (let i = 0; i < array.length; i++){
        result = func(result, array[i], i, array);
      }
    }
    return result;
  }
  
  
  /////////////////////// PROBLEM #2 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return an array of the names of the patients who are allergic to penicilin.
   */
  
  let penicilinNames = patients.reduce(function(acc, current) {
    // iterate through allergies array
    for (let i = 0; i < current.allergies.length; i++) {
        // search for a match
        if (current.allergies[i].type === 'Penicilin') {
            // push current name to acc
            acc.push(current.name);
        }
    }
    return acc;
  }, []);
  
  
  
  
  /////////////////////// PROBLEM #3 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return a string listing patients with a line break.
  - example output: 
  "Abe Froman\nKendall Roy\nLeslie Knope\nAdira\nDee Reynolds"
  
  "Abe Froman
  Kendall Roy
  Leslie Knope
  Adira
  Dee Reynolds
  "
   */
  
  let patientNames = patients.reduce(function(acc, current) {
    // accumulate current name with line breaks
    acc += current.name + '\n';

    // return acc
    return acc;

  }, '');

  
  
  /////////////////////// PROBLEM #4 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return an object that looks like this:
  
  {
    'Abe Froman': 56,
    'Kendall Roy': 40,
    'Leslie Knope': 45,
    'Adira': 18,
    'Dee Reynolds': 44
  }
   */
  
  let patientObj = patients.reduce(function(acc, current) {
    // add key value pairs to acc
    acc[current.name] = current.age;
    // return acc
    return acc;
  }, {});
  
  
  // use the native reduce method to return an object where each key is a gender and the value at each key is the number of patients corresponding to that gender
  /*
  {
    male: 2,
    female: 2,
    non-binary: 1
  }


  /*
  */
 
  let patientGenders = patients.reduce(function(acc, current) {
    // if object has the current gender as a property, increment
    if (acc.hasOwnProperty(current.gender)) {
        acc[current.gender]++;
    // otherwise create the property and assign it with the value of 1
    } else {
        acc[current.gender] = 1;
    }
    return acc;

  }, {});

  let patientGenders2 = patients.reduce((acc, current) => {
    if (acc.hasOwnProperty(current.gender)) {
      acc[current.gender]++;
    } else {
      acc[current.gender] = 1;
    }
    return acc;
  }, {})
  
  console.log(patientGenders); // { male: 2, female: 2, 'non-binary': 1 }
  console.log(patientGenders2);// { male: 2, female: 2, 'non-binary': 1 }
  
  /////////////////////// PROBLEM #5 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return an object where each key is a gender and the value at each key is an array of the names corresponding to gender.
  - example output:
  {
    male: ["Abe Froman", "Kendall Roy"],
    female: ["Leslie Knope", "Dee Reynolds"],
    non-binary: ["Adira"]
  }
   */
  
  genderNames = patients.reduce(function(acc, current) {
    // if acc has the current gender as a property
    if (acc.hasOwnProperty(current.gender)) {
        // push current name to value
        acc[current.gender].push(current.name);
    // if acc does not have current gender as property 
    } else {
        // create property for current gender and assign current name
        acc[current.gender] = [current.name]
    }
    return acc;
  }, {});
  

  
  /////////////////////// PROBLEM #6 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return an object where each key is a preexisting condition and the value is the number of patients who have this condition.
  
  // preexisting condition
  // count object
  {
    "Heart disease": 2,
    "Drug addiction": 2,
    ...etc.
  }
  */ 
 

  let conditionCount = patients.reduce(function(acc, current) {
    // iterate through preexistingConditions
    for (let i = 0; i < current.preexistingConditions.length; i++) {
        // if acc has the current condition, increment the value
        if (acc.hasOwnProperty(current.preexistingConditions[i])) {
            acc[current.preexistingConditions[i]]++;
        // if acc does not have the current condition, create it and assign it the value of 1
        } else {
            acc[current.preexistingConditions[i]] = 1;
        }
    }
    return acc;
  }, {});


