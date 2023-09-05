/* =======================================================
    Loop
        - For
========================================================== */

/*
    Syntax: 

        for(begin; condition; step) {

            Block of code, loop body

        }

*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log("")

/*
    ? Explanation

    * begin: let i = 0;
 البداية اولا المنطلق ديال التكرار

    * condition: i < 10;
 انا دبا مثلا بغيت غا عشرة ديال التكرار يعني خاصك دير ليميت للتكرار اي تحط ليه شرط امتا يوقف عندو التكرار
 كيحبس false و كيكمل مع يقلب ويلقا الشرط true اي ان قبل كل تكرار كيشوف واش الشرط باقي

 index وبما انك باغي 10 ديال التكرار فراه خاص دير اصغر قطعا من 10 حيت ال 0 محسوبة فال

    * step: i++
 فهادي بعد كل تكرار كيزود القيمة ديال التكرار
 مورا التكرار اللول كيزيد 1 مورا الثاني 2 الخ 0 مثلا دبا فهاد المثال لي لفوق اول قيمة يحطها
*/




// ? inline Variabls declaration

/*
 inline variable لي فمرحلة البداية هو i المتغير
 loop body حيت هو كيخدم غا فال indefined و بغيتي تستعملو غيطلع لك for يعني لجيتي مورا ال

 فالمقابل يمكن لك تصرح بيه قبل متستعمل التكرار
*/

let a = 0;

for (a = 0; a < 3; a++) { // use an existing variable
    console.log(a); // 0, 1, 2
}
console.log(a); // 3, visible, because declared outside of the loop

console.log("")





// ? Skiping Parts (كل المراحل الثلاث يمكن تجاوزهم وعدم كتابتهم)


// * For example, we can omit "begin" if we don’t need to do anything at the loop start:

let b = 0; // we have i already declared and assigned

for (; b < 3; b++) { // no need for "begin"
    console.log(b); // 0, 1, 2
}
console.log("")



// * We can also remove the "step" part:

let c = 0;
for (; c < 3;) {
    console.log(c++);
}



// * And finally we can remove everything

/*
    for (; ;) {
        repeats without limits
    }
*/