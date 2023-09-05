/* ============================================================
    Object-Oriented Programming [OOP]

        Prototype
            - are the mechanism by which javascript objects
            inherit features from one to another
=============================================================== */

// جديد غيورتها obj فراه اي سترينغ او objects شي خاصية سواء فالستريغ اولا ال prototype مثلا دبا ضفتي لل

Object.prototype.newSmthing = "Hi i'am new here";

let obj = { a: 1, b: 2 };
console.log(obj.a, obj.newSmthing); // "Hi i'am new here"

/* ------------------------- */

String.prototype.addDot = function () {
    return `.${this}.`
};

String.prototype.returnLastChar = function () {
    return this.slice(-1)
};

let strOne = "mohamed";
console.log(strOne.addDot()); // .mohamed.
console.log(strOne.returnLastChar()); // d


/* ------------------------- */

Array.prototype.lastItem = function () {
    return this.pop().repeat(20)
}

let arr = ["a", "b", "c"]

console.log(arr.lastItem()); // cccccccccccccccccccc