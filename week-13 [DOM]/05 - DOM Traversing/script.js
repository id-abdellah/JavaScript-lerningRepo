/* =============================================================
    DOM [ Traversing ]

        - nextSibling
        - previousSibling

        - nextElementSibling
        - previousElementSibling

        - parentElement

================================================================ */

// هو العبور ما بين العناصر الاشقاء Traversing ال
// اي من خلالو كتقدر توصل لشي عنصر قريب باش دير شي اكشن معين


let secondSpan = document.querySelector(".two");


// nextSibling  &  previousSibling
// بالنسبة للولة كتشد الشقيقة التالي للعنصر الحالي. اما التانية كتشد الشقيق السابق بالنسبة للعنصر الحالي
// هادو كشدوه سواء كان تعليق او نص او عنصر كامل

console.log(secondSpan.previousSibling);
console.log(secondSpan.nextSibling);





// nextElementSibling  &  previousElementSibling
// و مكيردوش التعليق او النص element بحال اللي لفوق ولكن هوما كيشدو غا العنصر يعني ال

console.log(secondSpan.previousElementSibling)
console.log(secondSpan.nextElementSibling)




// parentElement

// close لي كطلع ليك و فيها زر ديال pop up من الامثلة العملية. هو ال
// وصافي كدير ليه فانكش فاش كتكليكي عليه يحيد ليك العنصر الاب pop up هاد الزر ديال الغلق ما هو الا عنصر ابن لديك ال

console.log(secondSpan.parentElement)

secondSpan.onclick = function () {
    secondSpan.parentElement.style.opacity = "0"; // example
}