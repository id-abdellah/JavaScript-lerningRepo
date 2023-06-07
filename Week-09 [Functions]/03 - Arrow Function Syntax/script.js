/* ===============================================================
    Arrow Function

        Syntaxt:

            let fun = (arg1, arg2, ...) => { expression }

================================================================== */

function regularPrint(arg) {
    return arg;
}
console.log(regularPrint(10))



console.log("")



// * arrow function

let arrowPrint = (arg) => { return arg }
console.log(arrowPrint(100))


let arrowPrint2 = arg => arg; // one statement فحالة ال return تقد تا تحيد ال
console.log(arrowPrint2(200))


let arrowPrint3 = _ => 300;
console.log(arrowPrint3())


// ? الفرق بينها وبين العادية

/**
 * limitation ولكن عندها regular function هي بديل لل arrow function اولا ال
 * واحد تقدر تحيد القوسين argument فحالة عندك
 * وحدة اقدر تحيد القوسين statement فحالة عندك
 * underscor (_) تقدر تحيد الاقواس ودير غار arguments وفحالة معندكش
 */