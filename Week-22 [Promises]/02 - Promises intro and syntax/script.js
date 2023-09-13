/* =====================================================
    Promises

        Intro and Syntax
======================================================== */

/*

    Promises in javascript is like promise in the real life
    Promises is something that will happen in the future
    Promises is used to avoid callback hell


    Promises Status:
        - pending: initial state
        - fulfilled: completed successfuly
        - rejected: failed
    
    
    Story
        - once a promise has been called, it will start in a pending state.
        - the created promise will eventually end in a "resolved" state or "rejected" state.
        - calling callback functions (passed to "then" and "catch") upon finishing.
*/


let myPromise = new Promise((resolveFunction, rejectFunction) => {
    let connect = true;
    if (connect) {
        resolveFunction("Connection Established")
    } else {
        rejectFunction(Error("Connection Faild"))
    }
});



console.log(myPromise)

myPromise.then(
    (resolveValue) => console.log(resolveValue),
    (rejectValue) => console.log(rejectValue)
)
