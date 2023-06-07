/*
    Array Methods [ Slicing ]
    
        - slice( start [opt], end [opt] );  "end value not included"

        - splice( start [mad], deleteCount [opt], itemsToAdded [opt] )

*/




/* ========================= slice() ========================= */

let firstArray = ["aa", "bb", "cc", "dd", "ee"];
console.log(firstArray)

// القيم بجوج اختياريين
// تالقيمة ديال النهاية 0 بلا قيمة البدء غيبدا من slice الا درتي ال
console.log(firstArray.slice(0, 4));
console.log(firstArray.slice(2));
console.log(firstArray.slice(1, 4));
console.log(firstArray.slice(-2)); // القيم السالبة غيبدا من اللخر
console.log(firstArray); // كترجع مصفوفة جديدة و مكتبدلش الاصلية slice() ال


console.log("")
console.log("")





/* ========================= splice() ========================= */

let secondArray = ["1", "2", "3", "4", "5", "6", "7"];
console.log(secondArray)

// يما كضيف عناصر يما كتحذفهم على حساب لي قلتي ليها splice() ال
// كتعدل على المصفوفة الاصلية ماشي كتجيب مصفوفة جديدة splice() ال


secondArray.splice(0, 0, "a", "b");
console.log(secondArray); // * ['a', 'b', '1', '2', '3', '4', '5', '6', '7']
// a, b يعني دبا قلت ليه بدا ليا من زيرو و متمسحش حتا عنصر و ضيف ال


console.log("")


secondArray.splice(3, 0, [1, 2, 3]);
console.log(secondArray); // * ['a', 'b', '1', [1, 2, 3], '2', '3', '4', '5', '6', '7']
// قلتليه متمسحش والو وضيف ليا المصفوفة التالية 123 index يعني دبا فال 3


console.log("")
console.log("")



// دبا نجربو الحذف كيفاش كيخدم

let thirdArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(thirdArray);

thirdArray.splice(0, 2, "a", "b", "c");
console.log(thirdArray);

thirdArray.splice(thirdArray.length - 2, 2, "e", "f")
console.log(thirdArray)