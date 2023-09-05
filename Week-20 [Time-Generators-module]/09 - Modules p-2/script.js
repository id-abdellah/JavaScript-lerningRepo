/* ============================================================
    Modules

        - Export alias
        - named export
        - default export
        - import all
=============================================================== */

import anounymousFunction /* default export */, { a, arr, myObject, doSomething } from "./main.js"

console.log(anounymousFunction());


// لي كولشي فدقة وحدة import و يمكن دير

import * as all from "./main.js"

console.log(all); // Module {…}

console.log(all.a)
console.log(all.arr)
console.log(all.doSomething())