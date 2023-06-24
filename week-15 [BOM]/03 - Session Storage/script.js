/* =============================================================
    BOM [ Browser Object Model ]

        Session Storage

            - setItem()
            - getItem()
            - removeItem()
            - clear()
            - key()
================================================================ */

// بيناتهم ماشي بحال بحال localStorage و ال sessionStorage اول حاجة ال

// كتخلي البيانات ديما فيه يعني واخا تخرج من الويندو وتعاود دخل غتلقا نفس البيانات localStorage ال



// حدو الجلسة لي فيها نتا دبا يعني لخرجي من التاب كيمسح البيانات sessionStorage اما
// فالتاب الجديدة sessionStorage كيتمسح ال url وخا بنفس ال newTab فحالة درتي
// للتاب Duplicate باقي وخا فتاب جديدة, الحل وهو انك دير sessionStorage باش تخلي ال


// ولكن بقيم مختالفين, باش تعرف بلي راه كل واحد بوحدو item هادي مقارنة باش تعرف بلي واخا نفس ال
window.localStorage.setItem("testingThing", "123");
window.sessionStorage.setItem("testingThing", "abc");
// تمحا ولاخر لا session يعني دبا الا همشتي هاد جوج اكواد ومشيتي وحيدتي الويندو وعاودتي دخلتي, غتلقا ال




// sessionStorage الحوايج لي غتخدم فيهم
// للباج, داكشي لي دخل غيبقا مغيمشيش reload مثلا شي حقول ادخال. غيبقا المستخدم يدخل فيهم شوية دار بالغلط



// Example 

const inp = document.querySelector(".name")

inp.addEventListener("blur", function (e) {
    window.sessionStorage.setItem("userName", inp.value)
})

if (window.sessionStorage["userName"]) {
    inp.value = window.sessionStorage["userName"];
}