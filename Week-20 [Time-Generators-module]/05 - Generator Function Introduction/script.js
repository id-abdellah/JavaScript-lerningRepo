/* ============================================================
    Generator Function

            Introduction
                - Generator function run its code when required
                - Returns special object [Generator Object]
                - Generators are iterable
=============================================================== */

// ملي كتورك عليك كيعرض ليك المزيد من المحتوى show more زر ديال section مثلا فشي سيتات كتلقا فشي
// او الانتاجية yield هاد العملية كتسما

function* generateNumbers() {
    yield 1;
    yield 2;
    console.log("hello after yield 2");
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
}

let generator = generateNumbers();

console.log(typeof generator); // object
console.log(generator);


console.log(generator.next()); //{value: 1, done: false}
console.log(generator.next()); //{value: 2, done: false}
// بعد الانتاجية كتحبس عندها حتى كطلب نتا المزيد generator function مغتبانش حيت ال alert فهادي ال

console.log(generator.next()); // لي طلبتي yield عاد غتطبع ال alert فهادي غتبان ال
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());




console.log("")
/* -------------------- */

for (let value of generateNumbers()) {
    console.log(value);
    /*
        1
        2
        "hello after yield 2"
        3
        4
        5
        6
        7
        8
    */
    // مرة اخرى يعني بحال الا كتعاود تخدم بيها function هنايا غيبقا يعطيك البيانات حيت كترجع لل
}

for (let value of generator) {
    console.log(value);
    // للبيانات كاملين فلفوق yield فهادي مغيطبع والو حيت فايت فلول درنا
    // حيت هنا كدير لوب على المتغير لي عطا كولشي داكشي لي عندو
}