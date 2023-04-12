/* =============================================================
    Map practice
================================================================ */


/**
 * Swap Cases
 * الحرف لي صغير حولو لكبير والعكس
*/

let swappingCases = "mOhAMed AAbbCC";

let swappinArray = swappingCases.split("").map(function (element) {
    return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()
});

console.log(swappinArray.join(""))



console.log("")


/**
 * Inverted number
 * لعندك رقم سالب حولو لموجب و العكس
*/

let invertedNumbers = [1, -23, -10, 3, 29, -30, 100];

let inv = invertedNumbers.map(function (element) {
    return -element
});

console.log(inv)



console.log("")


/**
 * ignore numbers
 * عندك سترينغ فيها ارقام و حروف و المطلوب منك تحيد الارقام وتخلي غا لحروف
*/

let ignoreNumber = "Mo203ha23me431d";

let ign = ignoreNumber.split("").map(function (e) {
    return isNaN(parseInt(e)) ? e : ""
}).join("");

console.log(ign)