/*
    Array methods [Searching]

        - indexOf( Search element, start Value [opt] )

        - lasIndexOf( Search element, start Value [opt] )

        - includes( valueToFind, start value [opt] )  [ES7]

*/




let anArray = ["a", "b", "c", "d", "e", "f"];
console.log(anArray)


/* ============================ indexOf() ============================ */

// index كتعطيه العنصر لي كتقلب عليه و كيرد ليك البلاصة ديالو ف المصفوفة اي
// ويمكن لك تعطيه الاندكس لي يبدا منو البحث
// فحالة مكانش غير ليك -1
console.log(anArray.indexOf("c")); // * 2

console.log("")




/* ============================ lastIndexOf() ============================ */

// كتعطيه العنصر لي بغيتي و كيقلب عليه من اللخر ديال المصفوفات ويلي لقاه كيعطيك الاندكس ديالو العادي اي من اللييس
// بالنسبة للقيمة ديال بلاصة البداية فهادي. كتعطيها ليه على شكل عدد سالب حيت كيبدا من اللخر
// نفس الحاجة ملقاهش غيرد ليك -1
console.log(anArray.lastIndexOf("e")); // * 4
console.log(anArray.lastIndexOf("d", -2)); // * 3

console.log("")




/* ============================ includes() ============================ */

// نفس القضية ديال السترينغ كتعطيه قيمة وكيقلك واش كاينة اولا لا
// ويمكن تعطيه تا البلاصة لي يبدا منها
console.log(anArray.includes("g")); // * false
console.log(anArray.includes("b")); // * True
console.log(anArray.includes("d")); // * True

console.log("")




// simple Practice

if (anArray.includes("a") === true) {
    console.log("The letter a is found")
}

if (anArray.indexOf("b") === -1) {
    console.log("not found")
} else {
    console.log("Founded")
}