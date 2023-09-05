/* ============================================================
    Object-Oriented Programming [OOP]

            Object meta data and descriptor

            
                Object.defineProperty(obj, "property", {descriptor})

                descriptors:
                    - writable
                    - enumerable
                    - configurable [delete or reconfigure]
=============================================================== */

// و تحكم بيها تحكم كاامل object كيخليوك انك ضيف خاصية جديدة فال


let myObj = {
    a: 100,
    b: 200,
};


Object.defineProperty(myObj, "c", {
    // اي قابلية الكتابة من بعد يعني واش تقد تبدل القيمة ولا لا
    writable: true,

    // واش تبغي اللوب يوصل ليها ولا لا loop يعني فمرحلة ال
    enumerable: true,

    // redefine امكانية الحذف للخاصية او انك دير ليها
    // بنفس السمية وبدلتي القيمة مغيخليكش defineProperty وعاودتي false يعني انك لدرتي هاد
    configurable: true,
    value: 300,
})

console.log(myObj);




/* -------------------------- */

let secondObj = {
    a: 1,
    b: 2,
    c: 3
}

Object.defineProperty(secondObj, "d", {
    value: 4,
    writable: false,
    enumerable: false,
    configurable: true,
})

console.log(secondObj); // {a: 1, b: 2, c: 3, d: 4}

for (let prop in secondObj) {
    console.log(prop, secondObj[prop]); // a, b, c
};

secondObj.d = 444;

console.log(secondObj); // {a: 1, b: 2, c: 3, d: 4}