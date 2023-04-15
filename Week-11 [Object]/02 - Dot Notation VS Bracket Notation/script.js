/* ======================================================
    - Dot Notaion "."
    - Bracket Notation "[]"
========================================================= */

let exPropName = "my age";

let someInfo = {
    firstName: "mohamed",
    theAge: 20,
    "my country": "morocco",
    100: "number"
};

/**
 * من الاوبجكت كدير سمتو متبوعة بنقطة عاد سمية الخاصية property اولا فاش كتبغي تستدعي
 * dot notation عليه باستعمال ال access سترينغ فيها مسافة اولا رقم ميمكنش ت property ولكن فاش كدير فسمية ال
 * bracket notation [] هنا في كدخل
 */

console.log(someInfo["firstName"])
console.log(someInfo["theAge"])
console.log(someInfo["my country"])
console.log(someInfo["100"])