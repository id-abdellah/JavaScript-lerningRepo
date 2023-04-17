/* ======================================================
    Creat object with assign Method
========================================================= */

// اخرين objects باش تنسخ ليه شي حوايج خرين اولا شي target obj الفكرة ديالو انه كيطلب من
// بنفس الاسم كياخد اول وحدة كتقابلو property غار هو ملي كيلقا

let obj1 = {
    prop1: 100,
    prop2: 200,
};

let obj2 = {
    prop3: 300,
    prop4: 400,
};

let targetObj = {
    prop5: 500,
};

let finalObj = Object.assign(targetObj, obj1, obj2);
console.log(finalObj)



// خاوي وضيف عليه لي بغيتي object تقدير فبلاصتو دير target object فحالة معندكش

let anotherObject = Object.assign({}, obj1, { fromEx: "hi", fromEx2: "hello" });
// تقد تخليه خاوي اولا دير فيه خصائص، لي بغيتي target object ال
// اولا خصائص object و يمكن تا فداكشي لي غتنسخ ليه يكونو
console.log(anotherObject)