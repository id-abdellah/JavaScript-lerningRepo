/* ==============================================
        Assignment One
================================================= */

let num = 5;
// let num = 50;
// let num = 120;

if (num < 10) {
    console.log(`${num}`.padStart(3, 0))
} else if (num > 10 && num < 100) {
    console.log(`${num}`.padStart(3, 0))
} else {
    console.log(num)
}

num < 10
    ? console.log(`${num}`.padStart(3, 0))
    : num > 10 && num < 100
        ? console.log(`${num}`.padStart(3, 0))
        : console.log(num)


console.log("")


/* ==============================================
        Assignment Two
================================================= */

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log("{num1} is the same value as {str}")
}

if (num1 !== str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}

if (typeof num1 !== typeof str) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}

if (str !== str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}


console.log("")


/* ==============================================
        Assignment Three
================================================= */

let a = 10;
let b = 30;
let c = "30";

if (c > a && c !== b) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}

if (c > a && c == b && typeof c !== typeof b) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}

if (c != a && c !== a && c !== b) {
    console.log("{f} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {e}")
}


console.log("")


/* ==============================================
        Assignment Four
================================================= */

// Edit What You Want Here

let d = 11;
let e = 8;
let f = 11;
let g = 35;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (d > e) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (d > e && d < g) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (d > e && d === f) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((d + e) < g) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((d + f) < g) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((d + e + f) < g) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (g - (d + f) + e === 21) {
    console.log("True");
} else {
    console.log("False");
}