/* =========================================
                Assignment one
============================================ */
console.log("%cAssignment One", "color: red; font-size: 20px;")


let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// method 1  =>   ["Ahmed", "Elham", "Osama"]
console.log(myFriends.slice(false, num));

// method 2  =>   ["Ahmed", "Elham", "Osama"]
myFriends.pop()
console.log(myFriends)





/* =========================================
                Assignment two
============================================ */
console.log("%cAssignment two", "color: red; font-size: 20px;")


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]





/* =========================================
                Assignment three
============================================ */
console.log("%cAssignment three", "color: red; font-size: 20px;")


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]





/* =========================================
                Assignment four
============================================ */
console.log("%cAssignment four", "color: red; font-size: 20px;")

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][+false].slice(-(website.length + website.length)).toUpperCase()); // ZERO
console.log(words.reverse()[0][0].slice(website.length).toUpperCase()); // ZERO => other posible solution





/* =========================================
                Assignment five
============================================ */
console.log("%cAssignment five", "color: red; font-size: 20px;")


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

/*
    with 3 solutions
*/

if (haystack.includes(needle) === true) {
    console.log("Found")
}

if (haystack.reverse().includes(needle) === true) {
    console.log("Found")
}

if (haystack.indexOf(needle) != -1) {
    console.log("Found")
}

if (haystack.lastIndexOf(needle) == 1) {
    console.log("Found")
}





/* =========================================
                Assignment Six
============================================ */
console.log("%cAssignment six", "color: red; font-size: 20px;")


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];


arr1 = arr1.pop(); // arr1 = "x"

arr2 = arr2.slice(++arr1.length); // ["F", "Y"]

arr2.splice(true, false, arr1); //  arr2 = ["F", "X", "Y"]

allArrs = arr2.join("").toLowerCase();

console.log(allArrs); // fxy