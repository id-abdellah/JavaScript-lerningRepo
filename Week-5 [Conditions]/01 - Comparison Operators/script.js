/*
Comparison Operators

    ==  equal
    !=  not equal

    ===  indentical
    !==  none indentical

    >   larger than
    >=  larger than or equal

    <   smaller than
    <=  smaller than or equal

*/


// و على حسابها غدير شرط معين true or false كيرجعو


/* =====================   ==  &  !=   ===================== */

// حيت هاد العلامة كتقارن القيمة فقط و ماشي نوع البيانات true هادي غترجع
console.log(10 == "10");  // compare value only
console.log(10 != "10"); // false

console.log("")




/* =====================   ===  &  !==   ===================== */

// "===, !===" compare value + type
// كتقارن القيمة و نوع البيانات
console.log(10 === "10");
console.log(10 !== "10");  // true

console.log("")




/* =====================   >  >=   &  <  <=   ===================== */

// هادو باينين
// تاهوما كيقارنو القيمة وحدها ماشي النوع
console.log(10 > "10")
console.log(10 >= "10")

console.log("")




/* =====================   سؤال كان تطرح ف انترفيو   ===================== */

// هادو نفس النوع سترينغ ولكن ماشي نفس القيمة
// ولكن متغيرش فالقيم ديال السترينغ operator بشي true السؤال كان ترجع
console.log("Obito" === "Mohamed"); // false


// الجواب
console.log(typeof "Obito" === typeof "Mohamed"); // false