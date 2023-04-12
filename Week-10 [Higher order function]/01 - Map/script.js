/* =============================================================
    Higher order functions
        => is a function that accepts another functions 
        as parameters and/or return function
================================================================ */

/** =================
 * * * Map * *
 * 
 * is an array method
 * creats a new array
==================== */

/*
    ? Syntax

    .map(callBackFunction(element, index, array) { }, thisArg)

    - element [mand]  => the current element being processed in the array
    - index   [opt]   => the index of the current element being processed in the array
    - array   [opt]   => the current array
*/




// * Simple task for better understanding

// التاسك هو انك ترد ليا مصفوفة جديدة فيها هاد العناصر كل واحد مجموع على نفسو
let myNums = [1, 2, 3, 4, 5, 6, 7, 8];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i])
}
console.log(newArray); // [2, 4, 6, 8, 10, 12, 14, 16]




// * map نفس الفكرة و لكن دبا غنخدموها بال 

let mapUnd = myNums.map(function (element, index, array) {
    // console.log(`current element => ${element}`)
    // console.log(`current index => ${index}`)
    // console.log(`array => ${array}`)
    return element + element
}, 10);

console.log(mapUnd); // [2, 4, 6, 8, 10, 12, 14, 16]


// * map with arrow function. it will give the same result
let mapUnd2 = myNums.map((element) => element + element);

console.log(mapUnd2); // [2, 4, 6, 8, 10, 12, 14, 16]



// * ويمكن ليك دير فانكشن من عندك كدير الجمع او نفس الحاجة و تحطها فالماب

function addition(el) {
    return el + el
}

let add = myNums.map(addition)
console.log(add)