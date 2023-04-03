/* ===============================================================
    Rest parameters
        - Only one be allowed (خاص يكون واحد فقط)
        - Must be last element (خاص يكون هو اللخر حيت يقدر دير قبلو بارامز)
================================================================== */

// ? Rest Parameters

/*
    * The Problem

    parameters دبا مثلا فاش كتكون عندك دالة كتجمع مابين جوج
    وزيد ... تالت ورابع param و مثلا كتي باغي تزيد عدد اخر تجمعو مع دوك الجوج. فالعادي راه غتمشي تزيد
    لي غيتكتبو باش اتجمعو argument اي نتا معارفش شحال من ال  
*/

/*
    * The solution

    باش تقد تجمع العناصر ديالها array هو باراميتر عادي غار كيكون
    rest param باش ديكلاري بلي هو (...) غير خاصك ضيف قبل الباراميتير
*/


function restParam(...numbers) {
    console.log(numbers)
}

restParam(2, 3, 4, 1, 2, 6, 2, 11, 22, 33); // [2, 3, 4, 1, 2, 6, 2, 11, 22, 33]




console.log("")



// ? قدما كان العدد ديالهم argument الفكرة باش تجمع ال

function theTotal(...total) {
    let result = 0;
    for (let i = 0; i < total.length; i++) {
        result += total[i];
    }
    return `The total is ${result}`
}

console.log(theTotal(10, 20, 30, 40, 50))