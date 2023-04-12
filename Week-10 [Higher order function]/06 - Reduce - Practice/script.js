/* =============================================================
    Reduce - Practice
================================================================ */

/**
 * remove characters + use reduce
 */
let arr = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

let newArr = arr
    .filter(function (e) {
        return e !== '@';
    })
    .reduce(function (acc, currentel) {
        return `${acc}${currentel}`;
    });

console.log(newArr);

/**
 * find longest word
 */

let words = [
    'bla',
    'propaganda',
    'press',
    'simulations',
    'iTheLongestWord',
    'iAmNot',
    'iTheLongestWord-two',
];
let longestFound = words.reduce(function (acc, currentElement) {
    return acc.length < currentElement.length ? currentElement : acc;
});

console.log(longestFound);
