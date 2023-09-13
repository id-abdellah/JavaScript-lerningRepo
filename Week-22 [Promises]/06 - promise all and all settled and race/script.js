/* =====================================================
    Promises

            - Promise.all( [array of promises] )
            - Promise.allSettled( [array of promises] )
            - Promise.race( [array of promises] )
======================================================== */

// promises دبا مثلا عندك بزاف ديال ال

let firstPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("i' am the first promise")
    }, 1000)
});

let secondPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("i' am the second promise")
    }, 2000)
});

let thirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("i' am the third promise")
    }, 3000)
});

// ------- Promise.all
// كلهم promises كدير ضورة على all دبا ال
// array كترجعهم كاملين ف resolved الا كانو كاملين
// rejected ones كتحبس وكترجع ليك rejected ولكن انفوا كتقابل واحد
Promise.all([firstPromise, secondPromise, thirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rjected) => console.log(`rejected: ${rjected}`)
)


// ------- Promise.allSettled
// اولا واحد فيهم resolved or rejected كيرجعهم ليك كاملين سواء كانو كاملين allSettled بالنسبة لل
// المهم كيرجع ليك كولشي كيفما كانت الحالة
Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rjected) => console.log(`rejected: ${rjected}`)
)


// ------- Promise.race
// فمن خلال السمية باينة race اما بالنسبة لل
// كيرجعو resolved or rejected يعني اول واحد يقابلو سواء
Promise.race([firstPromise, secondPromise, thirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rjected) => console.log(`rejected: ${rjected}`)
)