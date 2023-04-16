/* ======================================================
    "This" keyword
========================================================= */

// object method هي
// لي كيرجع منها مبني على فين درتيها و كيفاش و علاش this ال
// ومبني على طريقة استعاءك للفنكشن



console.log("")



// window object كترجع على ال this هاد ال
console.log(this);
console.log(this === window); // window obj حيت فهاد الكونتكس كترجع على ال true



console.log("")



// فهاد الحالة window حيت كترجع على this وتا من window obj من accessable غتلقاه global scope فاش كدير متغير فال
// ولكن الى مدرتيش الدكلاريشن
aVar = 200;
console.log(window.aVar);
console.log(this.aVar);



console.log("")



// المالك ديال الفنكش فحاد الحالة هو الويندو window obj الا درتيها ف فانكش عوتاني غطلع ليك
function saySomthing() {
    return this
}
console.log(saySomthing())
console.log(saySomthing() === window)



console.log("")



// this بغينا ملي نوركو عليه نشوفو شنو غيرجع لينا من button فهاد المثال عندنا فالصفحة واحد ال
document.getElementById("btn").onclick = function () {
    console.log(this)
}
// button غتكون لاحضتي انك الا وركتي عليه كيطبع فالكنسول الطاغ ديال ال
// button او المالك ديال الفنكشن لي هو داك ال owner كتعود على ال this حيت فهاد الحالة



console.log("")



// object نطبقو على
let obj = {
    age: 20,
    ageDouble: function () {
        return this.age * 2
        // obj ديال هاد المالك ديال الفنكشن لي هو age يعني
        // المالك ديال هاد الفنكشن object كيعود على ال this هاد ال object فشي method ملي الفنكشن كتستدعا ك
    }
};
console.log(obj.age)
console.log(obj.ageDouble())