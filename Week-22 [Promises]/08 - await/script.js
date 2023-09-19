/* =====================================================
    Promises

            await
                - await works only inside async functions
                - await make js wait for the promise result
======================================================== */


let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("good Promise")
    }, 3000)
});

// promise كانت غتطبع الكونسلوز هوما الولين عاد نتيجة function قبل ال async دبا هادي كون ما درنا
// عاد تكمل promise غتخلي اللغة تسنا نتيجة ال await ف ديك async ولكن مع كاينة
async function readData() {
    console.log("Befor promise")
    await myPromise.then((resValue) => console.log(resValue))
    console.log("After promise")
}

readData()