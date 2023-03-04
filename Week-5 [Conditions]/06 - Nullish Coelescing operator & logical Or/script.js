/* ==========================================
    Nullish Coelescing Operator & Logical Or
============================================= */

/*

 * Logical Or ||
        - Null + Undefined + Any Falsy value

 * Nullish coalescing Operator ??
        - Null + Undefined

*/


/*

كتستعملهم باش تعرض بيانات بديلة فحالة البيانات لي درتي فلول وقع شي مشكل برمجي ومطلعوش

for example:
    for some reasons u meet these problems

        let price =;        => undefined 
        let price = null;   => null
        let price = 0;      => 0
        console.log(price)

*/


// هنا فين كيجي الدور ديال الفولباك اي فحالة وقع شي مشكل من هادو لي لفوق يطلع لك القيمة البديلة



// Logical Or نبداو بال
// و اي قيمة غالطة undefined و الل null اول حاجة هادي كترجع فحالة ال
let price;
console.log(`The price is ${price || 200}`);

let priceTwo = null;
console.log(`The price is ${priceTwo || 200}`);

let priceThree = 0;
console.log(`The price is ${priceThree || 200}`);



console.log("")



// ?? Nullish coalescing اما بالنسبة لل
// ومعندهاش علاقة مع اي قيمة غالطة null و ال undefined كترجع القيمة البديلة غار فحالة ال
let a;
console.log(`The price is ${price ?? 200}`);

let b = null;
console.log(`The price is ${priceTwo ?? 200}`);

let c = 0;
console.log(`The price is ${priceThree ?? 200}`);  // not working with falsy values