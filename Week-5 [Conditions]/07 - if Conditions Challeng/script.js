/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
    console.log("less than 10");
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("larger than 40");
} else {
    console.log("Unknown");
}

// with conditional ternary operator

a < 10
    ? console.log("less than 10")
    : a >= 10 && a <= 40
        ? console.log("10 to 40")
        : a > 40
            ? console.log("larger than 40")
            : console.log("Unknown");


console.log("")


/*
    Second Challeng
*/

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
    console.log("Good");
}

// w position may change
if (st[st.indexOf("W")].toLowerCase() === "w") {
    console.log("Good")
}

if (st.length.toString !== "string") {
    console.log("Good");
}

if (typeof st.length === "number") {
    console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}