/* =============================================================
    Filter - Practice
================================================================ */

/**
 * Filter words more than 4 character
 */

let sentence = 'i love fooood code too playing much';

let sentenceFiltred = sentence
    .split(' ')
    .filter(function (e) {
        return e.length <= 4;
    })
    .join(' ');

console.log(sentenceFiltred);

/**
 * ignore numbers
 * فحالة درتي الماب غيرد ليك ترو ترو فلس... حيت الماب مكتفلترش كترجع القيمة كما هي
 */

let willignored = 'm32oh24am9999e43d';

let numbersAreIgnored = willignored
    .split('')
    .filter(function (e) {
        return isNaN(parseInt(e));
    })
    .join('');

console.log(numbersAreIgnored);

/**
 * filter strings + multiply
 * حيد السترينع و ضرب الارقام في بعضها
 */
let mix = 'a241fdsk384lkjfsa128';

let newMix = mix
    .split('')
    .filter(function (e) {
        return !isNaN(parseInt(e));
    })
    .map(function (n) {
        return n * n;
    });

console.log(newMix);
