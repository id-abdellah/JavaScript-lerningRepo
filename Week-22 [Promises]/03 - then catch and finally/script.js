/* =====================================================
    Promises

        Training. then catch and finally

            - then: promise is successfull, use the resolve data
            - catch: promise is failed, catch the error
            - finally: promise is success or failed finally do something
======================================================== */



/*

    Stroy to app:
    
    we will go to the meeting, promise me we will find 4 employees
    - then(we will choose two of them)
    - then(we will test them, and choose one of the two)
    - catch(no one came, or not enough)

*/

let myPromise = new Promise((resolveFunction, rejectFunction) => {
    let employees = ["ahmed", "osama", "khaled", "brahim"];
    if (employees.length === 4) {
        resolveFunction(employees)
    } else {
        rejectFunction(Error("Not Enough"))
    }
});

myPromise.then(
    (resolveValue) => {
        resolveValue.length = 2;
        return resolveValue
    }
).then(
    (resolveValue) => {
        resolveValue.length = 1;
        return resolveValue;
    }
).then(
    (resolveValue) => {
        console.log(resolveValue)
    }
).catch(
    // كتخدم فاش كيكون الوعد متحققش catch هاد ال
    (rejectValue) => {
        console.log(rejectValue)
    }
).finally(
    // في كل الحالات سواء تحقق الوعد ولا لا الوظيفة لي تعطات ليها غديرها finally ال
    console.log("the operation is done")
)