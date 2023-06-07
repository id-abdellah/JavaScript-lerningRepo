/* ==================================== 
        Assignment One
======================================= */

// u should return True
console.log(100 == "100");
console.log(100 != 1000);
console.log(110 > 100 && 10 < 20);
console.log(-10 == "-10");
console.log(!(-50 == +"-40"));
console.log(typeof 10 == typeof -"-40");
console.log(!("10" === 10)); 
console.log(!(20 < false));


console.log("")

/* ==================================== 
        Assignment Two
======================================= */

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num2 >= num1); // true
console.log(!(num1 === num2)); // true
console.log(num1 > num2 || true > false); // true
console.log(num1 != num2); // true


console.log("")

/* ==================================== 
        Assignment Three
======================================= */

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a != b || a > c); // true
console.log(!(a == b) && !(a > b) && !(a <= c) && !(typeof a !== typeof c)); // true