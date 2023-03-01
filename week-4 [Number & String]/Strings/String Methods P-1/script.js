/*
String Methods:
        - Access with index
        - Access with charAt()
        - length
        - trim()
        - toUpperCase()
        - toLowerCase()
        - Chain Method
*/


let theName = "Obito";
console.log(theName)

/* ==================== Access with index ==================== */

// اول حاجة الاندكس كيبدا من الزيرو 0 وماشي الواحد
console.log(theName[0])
console.log(theName[2])

console.log("")




/* ==================== chartAt() => character at position ==================== */

// كتعطيه الموقع و كيرد ليك الكاراكتر لي فيه نفس القضية ديال الاندكس الفوق
console.log(theName.charAt(3))

console.log("")




/* ==================== length ==================== */

// كتحسب ليك عدد العناصر لي فالسيكوينس
// دائما الينث كيسبق الاندكس ب 1 حيت هي كتبدا العد من 1 اما الاندكس كيبدا من الزيرو
console.log(theName.length)

console.log("")







let x = "  mohamed  "; 
console.log(x)


/* ==================== trim() ==================== */

// هادي كتحيد اولا كتقص المسافات
// اولا. المسافات لي فالداخل ديال العلامات محسوبين عندهم كوست اما لي برا لا
// يعني تا فالانديكس راه محسوبين يعني كل مسافة كتساوي كراكتر

console.log(x.trim()) 
// من الاستعمالات ديالها، ان بنادم يقدر وهو كينسخ الباسوورد ينسخ معاه مسافة وهنا في كيدخل التريم باش ملي يلصق الباسوورد تحيد اي مسافة مزيودة

console.log(x.length) // also, the "lenght()" counts the spaces

console.log("")




/* ==================== toUpperCase()  &  toLowerCase() ==================== */

// باينين غار من السمية
console.log(x.toUpperCase());
console.log(x.toLowerCase());
// طبعا غتلاحظ بلي المسافات باقيين، وهنا في غتدخل طريقة السلسلة

console.log("")



/* ==================== Chain Method ==================== */

// مثلا. بغيتي تحيد المسافات و ترجع السترينغ كاملة كابيتال
console.log(x.trim().toUpperCase())

// اولا مثلا تحيد المسافات و ترجع حرف واحد كابيتال
console.log(x.trim().charAt(1).toUpperCase())  // O
// التريم كتحيد المسافات يعني الخاصية لي موراها ديال الاندكس مغتقدش تحسب المسافات حيت تحيدو فلول

// هادي هي السلسلة