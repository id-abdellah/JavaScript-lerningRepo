/* =============================================================
    Reduce
================================================================ */

/**
 * 
 * map, filter كتنفذ الفنكشن على كل عنصر من عناصر المصفوفة بحال ال reduce ال
 * غار هي كتبقا تخفض فالنتائج لحد مترجع ليك قيمة وحدة فاللخر
 * مثلا
    [10, 20, 12, 40, 50]
    كتشد ال 10 كتجمعها مع 20 كتعطيك 30. كتشد 30 كتجمعها مع 12 وهكدا حتى كتكمل
*/

/**
 * * * Syntax
 
    reduce(callbackfunction(
        Accumulator, 
        currentValue, 
        currentIndex, 
        source array 
    ){}, initialValue )


    - accumulator   => the accumulated value previously returned in the last invocation

    - current value => the current element being processed in the array

    - current index => The index of the current element that being processed in the array.
    ------------------ Starts from "0" if the initialvalue is provided
    ------------------ Othewise, it starts from index "1"

*/



let nums = [10, 20, 30, 40];
let add = nums.reduce(function (acc, current, i, arr) {
    console.log(`acc => ${acc}`)
    console.log(`current => ${current}`)
    console.log(`index => ${i}`)
    console.log("#".repeat(20))
    return acc + current;
})

console.log(add)

// * Explanation

/**
 * يعني كل كيمشيو على عناصر المصفوفة واحد واحد call كيخدمو بال higher order fun دبا ال
 * 
 * current value و ال accumulator كتمشي بجوج عناصر ال call فكل reduce ال
 *      index[0] لي هو العنصر الاول فالمصفوفة اي لي عندو accumulator ال
 *      نيشان accumulator هو العنصر لي تابع ال current value اما ال
 * دبا هو داك القيمة البدئية. حيت بحالا الى كضيق عنصر فلول دلمصفوفة accumulator فراه ال initialvalue فحالة عطيتي قيمة
 * 
 * accumulator ماشي ديال current element هو الاندكس ديال ال index ال
 *       accumulator هو ال 0 الاندكس كيبدا من 1 فلحالة العادية حيت ال
 *       هو القيمة البدئية acc فكيولي الاندكس كيبدا من زيرو اي اول عنصر و كيولي ال initialValue اما فحالة عطيتي ال
 */