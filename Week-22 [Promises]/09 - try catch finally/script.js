/* =====================================================
    Promises

            try catch finally
======================================================== */


let myPromise = new Promise((resolve, rejecte) => {
    let x = false;

    setTimeout(() => {
        if (x) {
            resolve("good promise")
        } else {
            rejecte("bad promise")
        }
    }, 2000);
});


async function readData() {
    console.log("befor promise")

    try {
        await myPromise.then((res) => console.log(res))
    } catch (error) {
        console.log(error)
    } finally {
        console.log("after promise")
    }
}
readData();


// data directly باش نجيبو ال await هاد طريقة اخرا كنستعمو فيها ال

async function fetchData() {
    console.log("befor fetch")

    try {
        let myData = await fetch("https://api.github.com/users/id-abdellah/repos");
        console.log(await myData.json())
    } catch (error) {
        console.log(error)
    } finally {
        console.log("after fetch")
    }
    /*
        befor fetch
        (21) array
        after fetch
    */
}

fetchData()