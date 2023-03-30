/*
    ! Loop For
*/

/* ================================================================== 
            Assignment One
===================================================================== */
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
    if (i === exclude) {
        continue;
    }
    console.log(i)
}


console.log(`


`)



/* ================================================================== 
            Assignment Two
===================================================================== */
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i >= stop2; i--) {
    if (i >= 10 === true) {
        console.log(i)
    } else {
        console.log(`0${i}`)
    }
}


console.log(`


`)



/* ================================================================== 
            Assignment three
===================================================================== */
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (let i = start3; i <= end3; i++) {
    console.log(i)
    for (let j = breaker; j <= end3; j += breaker) {
        console.log(`-- ${j}`)
        if (j === 4) {
            break;
        }
    }
}


console.log(`


`)



/* ================================================================== 
            Assignment Four
===================================================================== */
let index = 10;
let jump = 2;

for (; ;) {
    if (index <= jump === true) {
        break;
    }
    index -= jump;
    console.log(index + 2)
}


console.log(`


`)



/* ================================================================== 
            Assignment Five
===================================================================== */
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase()) === true) {
        continue;
    }
    console.log(`${i} => ${friends[i]}`)
}



console.log(`


`)



/* ================================================================== 
            Assignment Six  (تحويل الحروف الصغيرة للكبيرة و العكس)
===================================================================== */
let swappedName = "elZerO";
console.log(swappedName)
let newName = [];

for (let i = 0; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        newName.push(swappedName[i].toUpperCase())
    } else {
        newName.push(swappedName[i].toLowerCase())
    }
}
console.log(newName.join(""))



console.log(`


`)



/* ================================================================== 
            Assignment Seven
===================================================================== */
let mix = [1, 2, 3, "A", "B", "C", 4, 5, 6, 7, 8, 9];
let newMix = [];

for (let i = 0; i < mix.length; i++) {
    if (typeof mix[i] === "number" && mix[i] != 1) {
        newMix.push(mix[i])
    }
}

console.log(newMix)




console.log(`


`)



/*
    ! While loop
*/

let names = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let i = 0;
let counter = 0;

while (i < names.length) {
    if (typeof names[i] === "string" && !names[i].startsWith("A")) {
        console.log(`=> ${counter += 1} ${names[i]}`)
    }
    i++
}
