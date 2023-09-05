/* ============================================================
    Modules

            Import and Export
=============================================================== */

// للخواص مجموعين export للخواص لي بغيتي بحدهم اولا تمشي للتحت ودير export تقد دير

let a = "Mohamed ID-ABDELLAH";
let arr = [10, 20, 30, 40, 50];
let obj = {
    a: 100,
    b: 200,
};
function doSomething() {
    return `Iam from main.js`
}

export {
    a, arr, obj, doSomething
}