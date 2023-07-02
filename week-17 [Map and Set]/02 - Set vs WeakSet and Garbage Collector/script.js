/* =============================================================
    Set vs WeakSet and Garbage Collector

================================================================ */

/*
    1)
        Set     => Can store and data values
        weakSet => Collection of objects only

    2)
        Set     => Have size property
        weakSet => Does not hav size property

    3)
        Set     => Have Keys, Values, Entries
        weakSet => Does not have clear, keys, values and entries

    4)
        Set     => Can use forEach
        weakSet => Cannot use forEach

*/


// references لي مبقاش عندهم objects كيتستعمل باش تحط فيه ال weakSet دبا ال




/* 
    1)
*/

let wkSet = new WeakSet([{ a: 1, b: 2 }, { c: 3, d: 4 }]);
console.log(wkSet);




console.log("")


/* 
    3)
*/

// iteration mecanisme كيطبق ال iterator وهاد ال iterator, كترجع ليك value ال
// loop لل custom يعني يقدر يوصلك للعنصر لي جاي وتقدر دير

let mySet = new Set([1, 2, 3, 4, "A"])

// فيه العناصر set iterator كترجع ليك keys() ال
let iterator = mySet.keys(); // SetIterator {1, 2, 3, 4, 'A'}

// واش كمل ولا لا iteration فيه العنصر الحالي و الحالة ديال object كترجع next() ال
// true لولة يعني سالا ودير ساعة غيرد undefined للقيمة iterator تايوصل ال false ال الحالة مغتكون
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: "A", done: false}
console.log(iterator.next()); // {value: undefined, done: true}