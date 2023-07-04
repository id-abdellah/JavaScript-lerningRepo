/* =========== Assignment 1 =========== */

let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers); // set (10, 20, 2)

console.log(Array.from(setOfNumbers)[[...setOfNumbers].length - 1]); // 2
console.log(Array.from(setOfNumbers).pop()); // 2




/* =========== Assingment 2 =========== */

let myFriends = ['Osama', 'Ahmed', 'Sayed', 'Sayed', 'Mahmoud', 'Osama'];

console.log([...new Set(myFriends)].sort()); // ["Ahmed", "Mahmoud", "Osama", "Sayed"]
console.log(Array.from(new Set(myFriends)).sort()); // ["Ahmed", "Mahmoud", "Osama", "Sayed"]




/* =========== Assingment 3 =========== */

let myInfo = {
  username: 'Osama',
  role: 'Admin',
  country: 'Egypt',
};

let myMap = new Map(Object.entries(myInfo));

console.log(myMap);
console.log(myMap.size);
console.log([...myMap.keys()].includes('role'));




/* =========== Assignment 4 =========== */

let theNumber = 100020003000;

console.log(
  +[...new Set([...Array.from(theNumber.toString(), (n) => +n)])]
    .filter((n) => n > 0)
    .join('')
);




/* =========== Assignment 5 =========== */

let theName = 'Elzero';

console.log([...theName]);
console.log(Array.from(theName));
console.log([...new Set('Elzero')]);

let mp = new Map();
for (let i = 0; i < theName.length; i++) {
  mp.set(theName[i], i);
}
console.log([...mp.keys()]);




/* =========== Assignment 6 =========== */

let chars = ['A', 'B', 'C', 'D', 'E', 10, 15, 20];

let numbers = chars.filter((n) => !isNaN(n)); // [10, 15, 20]
let characters = chars.filter((n) => isNaN(n)); // ['A', 'B', 'C', 'D', 'E']

let newArr = [...numbers, ...characters]; // [10, 15, 20, 'A', 'B', 'C', 'D', 'E']

// دبا هادي ديما غتحط الارقام فلول وتنسخ بلاصتهم اول نفس عدد من الاحرف
console.log(newArr.copyWithin(0, numbers.length, numbers.length * 2));
