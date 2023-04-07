/* ===============================================================
    Scope: 
        - block Scope [if, switch, for]
        - Lexical Scope
================================================================== */


// ? ================= Block Scope ================

/**
 * local scope عندها block of code كامل ال
*/

/**
 * غيتجبد local scope يعني بحالو بحال غلوبال سكوب وخا يكون فلداخل ديال شي block scope ماشي var ال 
 * let or const الحل تخدم بال
*/

var x = 10;
if (true) {
    var x = 50; // على لي فالغلوبال override هدا غيدير
}
console.log(x); // 50






// ? ================= Block Scope ================

/**
 * nested function ليه من ال acces الا درتي فالفنكشن الاصلية متغير يمكن ليك ت function فعالم ال
   nested function من الفنكشن الاصلية لشي متغير كاين فال access العكس لا ميمكنش ت 
*/

function parent() {
    let x = 3000;
    function child() {
        console.log(x)
        /**
         * عندها فالسكوب ديالها غتستعملو x هاد الفنكشن الى لقات
         * global scope لي فوقها، مالقاتوش تاني غدوز للي فوقها، مالقاتوش غدوز لل function الا ملقاتو غتدوز لل
         */
    }
    return child()
}
parent(); // 3000

// Example

// بقا دير تهميش و طل على الكونسول باش تشوف التطبيق
let j = 4;
function first() {
    let j = 3;
    function second() {
        let j = 2;
        function third() {
            let j = 1;
            console.log(j)
        }
        third();
    }
    second()
}
first();