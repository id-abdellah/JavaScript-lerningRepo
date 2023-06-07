/*
    Nested if conditions
*/


// اي كدير شرط فالداخل ديال شرط اخر 


// مثال 

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "Morocco";
let student = true;

if (discount === true && country !== "Morocco") {  // وهادي من الطرق ديال الشروط المتداخلة
    price -= 30;
    // هنايا اكان الديسكاونت مفعل و البلد ماشي من المغرب ينقص اليسكاونت العادي

} else if (discount === true || discount !== true && country === "Morocco") {
    if (student === true) {
        price -= discountAmount + 20;
        // فهادي الا كان مغريبي و طالب نقص 50 سواء كان الديسكاونت مفعل اولا لا
    }

} else {
    price -= 10;
    // الديسكاونت مكاينش و ماشي مغريبي نقص 10 فسبيل الله ههه
}

console.log(price)