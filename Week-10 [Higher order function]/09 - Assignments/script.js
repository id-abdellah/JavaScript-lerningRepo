/* =============================================================
    Assignments
================================================================ */

/**
 * assignment One
 */

let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];

let mixed = mix
    .map(function (e) {
        return isNaN(parseInt(e)) ? e : '';
    })
    .reduce(function (acc, cur) {
        return `${acc}${cur}`;
    });

console.log(mixed);

console.log('');

/**
 * assignment Two
 *
 * eliminate duplicated letters ******* special
 */

let myString = 'EElllzzzzzzzeroo';

let myStringFiltred = myString
    .split('')
    .filter(function (element, index, array) {
        return array.indexOf(element) === index;
    })
    .reduce(function (acc, cur) {
        return `${acc}${cur}`;
    });
console.log(myStringFiltred);

console.log('');

/**
 * Assignment Three
 */

let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];

let myNewArray = myArray
    .reduce(function (accumulatro, currenEl, index, sArray) {
        return accumulatro + currenEl;
    })
    .split('')
    .filter(function (e) {
        return e === ',' ? '' : e;
    })
    .reduce(function (a, b) {
        return a + b;
    });

console.log(myNewArray);

console.log('');

/**
 * Assignment Four
 */

let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C'];

let justNums = numsAndStrings
    .filter(function (element) {
        return !isNaN(parseInt(element));
    })
    .map(function (element) {
        return -element;
    });

console.log(justNums);

console.log('');

/**
 * Assignment Five
 */

let nums = [2, 12, 11, 5, 10, 1, 99];

let numsReduced = nums.reduce(function (
    accumulator,
    currentElement,
    index,
    sourcArray
) {
    if (currentElement % 2 === 0) {
        return accumulator * currentElement;
    } else {
        return accumulator + currentElement;
    }
},
    1);

console.log(numsReduced);
