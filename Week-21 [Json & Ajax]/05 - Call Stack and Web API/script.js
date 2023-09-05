/* ============================================================
    Call Stack and Web API

        Call stack || stack trace
            - Javascript engine uses a call stack to manage excution contexts
            - Mechanisme to make the interpreter track you calls
            - When function callet it added to the stack
            - When function executed it removed from the stack
            - After function is finished executing the interpreter continue from the last point
            - Work using "LIFO => Last In First Out"
            - Code execution is Synchronous
            - Call stack detect web api methods and leave it to the browser to handle it

        Web API
            - methods available from the browser
=============================================================== */

// باش ي يهندلها فاللخر browser هاد غيدوز عليها محرك اللغة ولكن غيخليها لل
setTimeout(() => {
    console.log("Web api")
}, 0);

function one() {
    console.log("one")
}

function two() {
    one()
    console.log("two")
}

function three() {
    two()
    console.log("three")
}

three()

/*
    one
    two
    three
*/