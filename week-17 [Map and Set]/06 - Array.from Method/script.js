/* ============================================================

    Array Methods

        Array.from(Iterable, mapFunction, this)
=============================================================== */


// array وكترجع لك منو set or string بحال iterable كتعطيها method هاد ال

let arrayFromString = Array.from("Mohamed");

console.log(arrayFromString);


// لي عطيتي iterable على المصفوفة لي غتجي من داك ال map funtion تقد تستعمل

console.log(Array.from("123456789", (n) => +n));
console.log(Array.from("123456789", function (n) { return +n + +n }));




console.log("")



// Set مع method دبا غنخدمو هاد ال

// مثلا هادي مسألة بغينا نرجعو غا الارقام لي ممعاودينش
let myArray = [1, 1, 1, 2, 3, 4]

let mySet = new Set(myArray);

console.log(mySet); // Set(4) {1, 2, 3, 4}
console.log(Array.from(mySet)); // [1, 2, 3, 4]
// or
console.log(Array.from(new Set(myArray))); // [1, 2, 3, 4]
// or, Spread operator
console.log([...new Set(myArray)])






console.log("")


// لي كتعطي ليها arguments كترد ال function هادي
function af() {
  return arguments;
}

console.log(af("mohamed", "hakim", "ahmed", 1, 2, 3)); // Arguments(6) ['mohamed', 'hakim', 'ahmed', 1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
console.log(Array.from(af("mohamed", "hakim", "ahmed", 1, 2, 3))); // ['mohamed', 'hakim', 'ahmed', 1, 2, 3]


// arguments اولا تقد تخليها نيشان ترد مصفوفة من ال

function af2() {
  return Array.from(arguments)
}

console.log(af2(1, 2, 3, 4, 5, 6, "a", "ab")); // [1, 2, 3, 4, 5, 6, 'a', 'ab']