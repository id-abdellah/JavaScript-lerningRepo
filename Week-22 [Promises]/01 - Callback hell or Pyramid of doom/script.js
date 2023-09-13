/* =====================================================
    Promises

        Callback function || Pyramide of doom
======================================================== */



/* 
    What is callback function
    - A callback is a function that is passed as an argument to another function that executes the callback based on the result.
    They are basically functions that are executed only after a result is produced. 
    Callbacks are an important part of asynchronous JavaScript.

    what is callback hell
    - Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. 
    Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 
*/



/* example of a callback function */

function mainFunction(callback) {
    setTimeout(() => {
        callback([1, 2, 3])
    }, 1000)
}

function add(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return console.log(sum); // 6
}

mainFunction(add);

// لي كل واحد فيهم كيدير وظيفة معينة callbacks هو فانكشن فيها بزاف ديال callback hell ببساطة ال
// وفاش كيكونو بزاف كيديرو شكل ديال الهرم ولي كينقص من قابلية القرائة للكود