/* =============================================================
    Destructuring

        Destructuring Arrays

================================================================ */

// وضيفهم فمتغيرات جديدة maps, array, objects غتقدر تاخذ البيانات من ال destructuring عن طريق ال



/* =============== Part 1 ============== */

let myFriends = ["mohamed", "ahmed", "aicha", "fatima"]

let [a = "A", b, c, d, e = "CCC"] = myFriends;

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

// update فحالة كتي ديجا معرف هاد المتغيرات ف بحالا كدير ليهم
// undefined فحالة درتي متغير مزيود كيرجع ليك
// غياخد ديك القيمة الافتراضية array ويمكن ليك تحط قيمة افتراضية للمتغيرات باش فحالة ملقاهش فال

console.log("")


// فحالة كتي باغي شي قيم و شي قيم لا
let [x, , y,] = myFriends;
console.log(x); // mohamed
console.log(y); // aicha

// يعني فبلاصة العنصر لي مبغيتيش كتحط بلاصتو عنصر خاوي



console.log("")





/* =============== Part 2 ============== */

// nested arrays هنا عندك

let homies = ["a", "b", "c", ["d", "e", ["f", "g"]]];

let [, , , [A, , [, B]]] = homies;

console.log(A); // d
console.log(B) // g





console.log("")






/* =============== Part 3 - Swapping Variables ============== */

// الدور وهو انك عندك جوج متغيرات وبغيتي تبدل قيمة اللول بقيمة التاني و التاني بقيمة اللول


// الطريقة القديمة

let vOne = 10;
let vTwo = 20;

let stash = vOne; // بحال الا كتخزن القيمة فشي صندوق باش ترجع ليها من بعد

vOne = vTwo;

vTwo = stash;

console.log(vOne);
console.log(vTwo);



console.log("")



// by using destructuring, it super easy

let var1 = 100;
let var2 = 500;

[var1, var2] = [var2, var1];

console.log(var1)
console.log(var2)