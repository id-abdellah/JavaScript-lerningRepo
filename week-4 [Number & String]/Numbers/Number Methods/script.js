/*
  Number Methods
    - Two Dots To Call A Methods
    - toString()
    - toFixed()
    - parseInt()
    - parseFloat()
    - isInteger() [ES6]
    - isNaN() [ES6]
*/



/* =============== toString() =================== */

console.log((200).toString())
console.log(200..toString()) // if u delete () u should add two dots "..toString"

console.log("")



/* =============== toFixed() =================== */

// toFixed is return string.
// toFixed() is used sets how much of number after the "colone" u want to return
console.log((42.83334).toFixed(2))
console.log((42.84379).toFixed(4))

console.log("")



/* =============== parseInt() =================== */

// some tests to explaine
console.log(Number("100 Obito"))  // NaN
console.log(+"100 Obito") // NaN

console.log(parseInt("100 Obito"))  
// parseInt() has the ability to return number even if he following by string

console.log("")




/* =============== parseFloat() =================== */

// parseInt() => returns an integer number. he don't have ability to return float number
console.log(parseInt("100.500 Obito")) 

// prseFloat() => the same thing as parseInt(), just he have ability to return float number 
console.log(parseFloat("100.500 Obito"))

console.log("")



/* =============== isInteger =================== */

// the output will be "true" or false
console.log(Number.isInteger("100"))  // False, its string
console.log(Number.isInteger(100.342))  // false, its floting number
console.log(Number.isInteger(200))  // True

console.log("")



/* =============== isNaN() =================== */

// the output of this is "false"!!!, because "isNaN()" checks the data that are return to u is NaN or No
console.log(Number.isNaN("Obito"))

// this will give "True"
console.log(Number.isNaN("Obito" / 20))