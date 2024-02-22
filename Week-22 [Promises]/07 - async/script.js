/* =====================================================
    Promises

        async
            - async before function mean this function return a promise
            - async and await help in creating asynchronous promise behavior with clean style
======================================================== */



// هي هادي function من شي promise دبا الطريقة لي عارفين دبا حنا باش ترجع

function getData1() {
    return new Promise((res, rej) => {
        let x = true;
        if (x) {
            res("The promise is success. from first fun")
        } else {
            rej("Failed. from first fun")
        }
    })
}

getData1().then(
    (resValue) => console.log(resValue),
    (rejValue) => console.log(rejValue)
)




// function من promise كاين طريقة ثانية باش ترجع

function getData2() {
    let x = true;
    if (x) {
        return Promise.resolve("The promise is success. from second fun")
    } else {
        return Promise.reject("Failed. from second fun")
    }
}

getData2().then(
    (resValue) => console.log(resValue),
    (rejValue) => console.log(rejValue)
)





// async keyword وكاينة طريقة تالتة كنستخدمو فيها ال
// promise غترجع function قبل الفانكشن معناها ان هاد ال async ملي كنديرو
// وخا مترجعو نتايا حرفيا من داخل الفانكشن promise يعني غترجع

async function getData3() {
    let x = false;
    if (x) {
        return "The promise is success. from third fun"
    } else {
        throw new Error("Faild")
    }
}

getData3().then(
    (resValue) => console.log(resValue),
    (rejValue) => console.log(rejValue)
)