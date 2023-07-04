/* ============================================================

    Spread Syntax

        Spread Operator => ...Iterable
        "Allow an Iterable to expand in place"
=============================================================== */





/* ==================== spread with strings => expand string ==================== */

console.log("mohamed");
console.log(..."mohamed"); // m o h a m e d
console.log([..."mohamed"]); // ['m', 'o', 'h', 'a', 'm', 'e', 'd']







console.log("")


/* ==================== Concatenate arrays ==================== */

let firstArray = [1, 2, 3, 4];
let secondArray = [5, 6, 7, 8];
console.log(firstArray, secondArray)

let theTwoArraysInOne = [...firstArray, ...secondArray];
console.log(theTwoArraysInOne); // [1, 2, 3, 4, 5, 6, 7, 8]







console.log("");


/* ==================== Copy Array ==================== */

let myMainArr = ["a", "b", "c"];

let copiedArr = [...myMainArr];

console.log(myMainArr, copiedArr);







console.log("")


/* ==================== Push inside array ==================== */

let oldFriends = ["mohamed", "ziko", "habib"];
let newFriends = ["sameh", "khalil"]

let allFriends = [];
allFriends.push(...oldFriends, ...newFriends);

console.log(allFriends);







console.log("")


/* ==================== Use with math obj ==================== */

let numbers = [10, 20, -100, 22, 2000, 1000, -60];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));







console.log("")


/* ==================== with objects => Merge Objects ==================== */

let obj1 = {
  a: 1,
  b: 2
};

let obj2 = {
  c: 3,
  d: 4
};

let twoObj = { ...obj1, ...obj2, e: 5, f: 6 };
console.log(twoObj)