/* =============================================================
    DOM [ classList Object and Methods ]

    - classList
        - length
        - contains (true / false)
        - item (index)
        - add
        - remove
        - toggle

================================================================ */

// من الحوايج لي غتستعلمها اغلب الوقت
// object وهو
// عن طريقها تقدر تحذف واحد من الكلاسس لي كاينين اولا تزيدو اولا تقلب عليه الخ

let element = document.getElementById("my-div")

console.log(element.classList)


/* *** length *** */
// باين وهو شحال من كلاس عندك length ال



/* *** contains("Token") *** */

// false ملقاهش غيرجع true كيقبل منك سترينغ لي هي سمية الكلاس. الا لقاه غيرجع
console.log(element.classList.contains("one")); // true
console.log(element.classList.contains("moha")) // false




/* *** item("index") *** */

// كتعطيه الاندكس و كيرجع ليك سمية الكلاس لي فداك الاندكس
// "null" فحالة درتي شي اندكس مفيهش كلاس غيرجع ليك
console.log(element.classList.item(0)); // one




/* *** add(...tokens) *** */

// للعنصر classes كيضيف
let element2 = document.getElementById("myTwoDiv");

element2.onclick = function () {
    this.classList.add("added-one", "added-two")
}
// و كيليك عليه و غتشوف بلي تزادو جوج كلاس. ويمكنلك تزيد قاش بغيتي devtools سير ل





/* *** remove(...tokens) *** */

// غار هو كيحيد الكلاس لي كتعطيه اولا الكلاسس add نفس فكرة ال
let element3 = document.getElementById("myThirdDiv");

element3.onclick = function () {
    this.classList.remove("one", "three")
}
// و فحالة كتبتي كلاس كاين و لاخر لا. غيحد هداك لي كاين
// وجرب devTools نفس القضية سير لل





/* *** toggle("token") *** */

// مع بعض remove و add كيدير toggle ال
// يعني الكلاس لي غتعطيه الا لقاها غيحيدو. مالقاهش غيضيفو
let element4 = document.getElementById("myFourthDiv");

element4.onclick = function () {
    this.classList.toggle("Hi")
};