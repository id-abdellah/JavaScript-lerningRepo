/* =============================================================
    Filter
================================================================ */

/**
 * Creats new array
 * with all elements that pass the test implemented by the provided function
 * test يعني كترجع غار هادوك لي دازو من true & false اي انها كتخدم بال
*/

/*
    ? Syntax

    .filter(callBackFunction(element, index, array) { }, thisArg)

    - element [mand]  => the current element being processed in the array
    - index   [opt]   => the index of the current element being processed in the array
    - array   [opt]   => the current array
*/

/*
    كتي كتنفذ اكشن معينة على العنصر و كيرجع ليك النتيجة لي غترجع بعد تنفيذ الاكشن map فال
    test و كيرجع ليك العناصر لي دازت من ال condition كدير filter اما فال
*/



// * Test for better understanding

// evenNumber
let nums = [1, 2, 12, 33, 14, 23, 89, 84];
let evenNumber = nums.filter(function (element) {
    return element % 2 === 0 ? true : false;
});
console.log(evenNumber)



console.log("")



// return words that starts with x letter
let word = ["Ahmed", "Mohamed", "Mahmood", "Hammody", "Sameh", "Masry"];
let wordfiltred = word.filter(function (element) {
    return element.startsWith("M") ? true : false
});
console.log(wordfiltred)