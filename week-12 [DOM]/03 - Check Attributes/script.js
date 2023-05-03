/* ===========================================================
    DOM [Check Attributes]

        - Element.attributes
        - Element.hasAttribute
        - Element.hasAttributes
        - Element.removeAttribute
============================================================== */

let myP = document.getElementsByTagName("p");


// Element.attributes  => كيعرض ليك غاع السمات لي فالعنصر
console.log(myP[0].attributes)


// Element.hasAttribute
// يعني كيدخل فصناعة القرار true / false لي كتعطيه واش كاين فالعنصر, و كيرجع attr كيدير فحص على ال
console.log(myP[0].hasAttribute("class")); // true
console.log(myP[0].hasAttribute("data-table")); // false


// Element.hasAttributes
// كيما كانت المهم واش فيه ولا لا attributes كيفحص واش العنصر فيه
console.log(myP[0].hasAttributes())


// Element.removeAttribute
// نهائيا من العنصر attr هدا كيحذف ال
// تخلي سمية العنصر وتخلي القيمة خاوية setAttribute نهائيا حيت يمكن ليك بال
myP[0].removeAttribute("data-src")

console.log("")

// Testing condition on second paragraph

if (myP[1].hasAttribute("data-src")) {
    myP[1].setAttribute("data-src", "conditionValue")
} else {
    console.log("this attr not found")
}

if (myP[1].hasAttribute("title")) {
    myP[1].removeAttribute("title")
} else {
    console.log("not found")
}