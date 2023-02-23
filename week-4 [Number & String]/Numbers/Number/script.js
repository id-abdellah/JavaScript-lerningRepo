/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/



/* ==================Syntactic Sugar ================== */
console.log(1000000);
console.log(1_000_000); // syntactic sugar is used to make the number easy to read

console.log("")



/* ================== e ================== */
// "e" makes you to set how much of "0" do u want after the number
console.log(1e6)
console.log(3e2)
// or befor it
console.log(8e-6)
console.log(3e-2)
console.log("")



/* ================== ** ================== */
// is known
console.log(10 ** 6)

console.log("")



/* ================== number with decimal ================== */
// when you type
console.log(1_000_000.00) 
// the formater of js will remove ".00" because they value alway be "0"
console.log(1_000_000.1) // and this not

console.log("")



/* ==================  ================== */

console.log(Number.MAX_SAFE_INTEGER);  // max safe number you can use.


console.log(Number.MAX_VALUE); // last numer u can rich on js language
// so, when u try to increas him, it will not
console.log(Number.MAX_VALUE + 2);


// the same thing with "Min Values"
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);



// the type of Number is "Function"
console.log(typeof Number);