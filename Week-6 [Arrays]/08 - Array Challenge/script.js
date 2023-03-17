/*
    Array Challenge
*/

let zero = 0;
let counter = 3;
let my = ["ahmed", "mazero", "elham", "osama", "gamal", "ameer"];


// Block of solutions

console.log(my.slice(zero, ++counter).reverse()); // ['osama', 'elham', 'mazero', 'ahmed']
console.log(my.slice(-(my.length - true), --counter).reverse());

// "Elzero"
my.splice(zero, my.length, "Elzero");
console.log(my.join())

// "rO"

let a = my.join();
console.log(a.charAt(a.length - 2).concat((a.charAt(a.length - 1).toUpperCase())));
console.log(`${a.charAt(a.length - 2)}${a.charAt(a.length - 1).toUpperCase()}`);