console.log(`%cProperty Existence Test`, `color: #ff8000; font-size: 14px;`);
/**
 * Property Existence Test
 *
 *  - "in" Operator
 *  - "hasOwnProperty()" methos
 *  - Comparing with "undefined"
 */

let myFirstObj = {
    a: 10,
    b: 20,
    c: 30,
};

/* "in" Operator */

// The syntax => ( "key" in Object )
// Checks within own and inherited Properties of the object
console.log('a' in myFirstObj); // true
console.log('toString' in myFirstObj); // true

/* "hasOwnProperty()" */

console.log(myFirstObj.hasOwnProperty('a')); // true
console.log(myFirstObj.hasOwnProperty('toString')); // false
// suggests that it looks for the own properties of the object. The own properties are those defined directly upon the object.

/* Comparing with "undefined" */
console.log(myFirstObj.c !== undefined); // true
console.log(myFirstObj.realName !== undefined); // false
/*
But be aware of false-negatives. If the property exists, but has undefined value (case, however, rarely happening), comparing against undefined evaluates incorrectly to false
 */

console.log(`%cFor...in Loop`, `color: #ff8000; font-size: 14px;`);

/**
 * For in Loop

  To walk over all keys of an object, there exists a special form of the loop

  Syntax:
    for (key in object) {
       executes the body for each key among object properties
    }
  
  "key" is the variable of the loop
  you can use any variable name instead of "key"

 */

let mySecondObject = {
    car: 300,
    bike: 60,
    motorbike: 200,
    airplane: 1000,
    helicopter: 400,
};

let carNames = [];
let maxSpeedValue = [];

for (let key in mySecondObject) {
    carNames.push(key);
    maxSpeedValue.push(mySecondObject[key]);
}

console.log(carNames);
console.log(maxSpeedValue);