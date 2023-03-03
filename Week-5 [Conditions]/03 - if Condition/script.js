/*
    Control Flow
        - if
        - else if   (الا الشرط اللول متحققش كتعطيه شرط ثاني و ثالث الخ) 
        - else      (الا غا الشروط متحققوش كتعطيع شرط اخير يرجع ليه فهاد الحالة)


    Syntax:

        if (condition) {
            block of code
        }

*/


// من المعروف ان السكريبت البرمجي كيتقرا سطر سطر اي من اللول تالخر
// if condition اذا الا درتي مثلا متغير اقدر القيمة ديالو تبدل فشي
// اي انك كتحكم بناءا على الكنديشن control flow هدا هو ال



// مثال للفهم


let price = "100";
let discount = false;
let discountAmount = 30;
let country = "Morocco";

if (discount === true) {
    price -= discountAmount;
    // فهاد الحالة الشرط متحققش كون تحقق غينقص 30 من الثمن اذ غنعطيه شرط ثاني

} else if (country === "ksa") {
    price -= discountAmount;
    // الشرط التالي مكيخدم الا الى اللول متحققش عاد كيخدم
    // كون تحقق بلي الشخص من المغرب غيطبق الديسكاونت

} else {
    price -= 10;
    // اللخرة كترجع ليها فهاد الحالة else فحالة متحقق و لا شرط من الفوق كدير
    // الاخيرة مفيهاش شروط else ال
}

console.log(price);  // القيمة لي غترجع يمكن تغير بسباب الشروط

console.log("");



// مثال اخر للتطبيق

let ticketPrice = 500;

if (ticketPrice >= 599) {
    console.log("Don't buy this ticket, too expensive")
} else {
    console.log("You can buy it, it's cheap")
}