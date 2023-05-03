/* ===========================================================
    DOM Selectors:
        - Find element by ID
        - Find element by Tag Name
        - Find element by Class Name
        - Find element by CSS Selectors [Query selector]
        - Find element by Collection
        - - - - Titel
        - - - - Body
        - - - - Images
        - - - - forms
        - - - - links
============================================================== */

// اولا تخزنو في متغير باش تخدم بيه console يمكن ليك تجيب العنصر وطبعو فال
// يمكن ليك تخدم بيهم properties and methods فيه document object model ال

let myIdElement = document.getElementById("my-div");
console.log(myIdElement)


let myTagElements = document.getElementsByTagName("p");
// ويمكن ليك تختار بينهم بالاندكس collection مع هما جوج فالصفحة غيعطيك
console.log(myTagElements[0])
console.log(myTagElements[1])


// فيه غا الايليمنتس لي فيهم الكلاس collection تا الكلاس كيتكرر يعني يقدر يرجع ليك
let myClassNameElements = document.getElementsByClassName("my-span");
console.log(myClassNameElements[0])


// css بغيتي بحال هادوك لي فات تعلمتيهم فال selector يمكن ليك دير اي query selector ال
// غيجيب ليك اول عنصر غيقابلو element و هاد الكلاس كاين فكتر من className غار هو فاش مثلا كدير
// بحالو بحال اللول غار هو فلحالة لي لفوق غيجيب ليك غاع العناصر لي فيهم الكلاسنيم querySelectorAll لهذا كاين
let myQuerySelector = document.querySelector(".my-querySel");
console.log(myQuerySelector)

let myQueryAll = document.querySelectorAll(".my-querySel");
console.log(myQueryAll)


// كاينين حوايج فاللغة جاهزين
// titel بحال ال
console.log(document.title); // لي فوق الصفحة title كايجيب ليك ال
console.log(document.body); // ديال الصفحة كلو body كيجيب ليك ال 

console.log(document.forms[0]); // كيجيب ليك الفورمز لي فالصفحة و تقد بالاندكس تخار بينهم
console.log(document.forms[0].one.value); // input هي داكشي لي مكتوب فال value اما ال name value هي ال one ال

console.log(document.links[0])
console.log(document.links[0].href)

// images نفس الحاجة بالنسبة لل