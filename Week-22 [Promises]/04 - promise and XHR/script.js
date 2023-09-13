/* =====================================================
    Promises

        Promise and XHR
======================================================== */


/* ------- XHR without Promise */

/*
let githubApi = "https://api.github.com/users/id-abdellah/repos";

let myRequest = new XMLHttpRequest();
myRequest.open("GET", githubApi)
myRequest.send()

myRequest.addEventListener("readystatechange", (e) => {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        let jsData = JSON.parse(myRequest.responseText);
        console.log(jsData)
        for (let i = 0; i < jsData.length; i++) {
            let div = document.createElement("div");
            div.innerHTML = `
                <h3>Repo number ${i + 1}</h3>
                <p>name: ${jsData[i].name}</p>
                <p>id: ${jsData[i].id}</p>
                <p><span>URL:</span> <a href="${jsData[i].html_url}">${jsData[i].html_url}</a></p>
                <p>Private Status: ${jsData[i].private}</p>
                <hr>
            `;
            document.body.appendChild(div)
        }
    }
})

*/


/* XHR with Promise */

let getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.open("GET", apiLink)
        myRequest.send()

        myRequest.onload = function () {
            if (myRequest.readyState === 4 && myRequest.status === 200) {
                resolve(JSON.parse(myRequest.responseText))
            } else {
                reject(Error("No data found"))
            }
        };
    })
};

getData("https://api.github.com/users/id-abdellah/repos").then(
    // لي بعدها then خدات مصفوفة البيانات ونقصاتها ل عشرة ورداتها لل then هاد ال
    (result) => {
        result.length = 10;
        return result
    }
).then(
    (slicedData) => {
        for (let i = 0; i < slicedData.length; i++) {
            document.body.innerHTML += `
                <div>
                    <h3>repo number [${i + 1}]</h3>
                    <ul>
                        <li>Name: ${slicedData[i].name}</li>
                        <li>id: ${slicedData[i].id}</li>
                        <li>url: <a href="${slicedData[i].html_url}">${slicedData[i].html_url}</a></li>
                        <li>created at: ${slicedData[i].created_at}</li>
                    </ul>
                </div>
            `
        }
    }
).catch(
    (rejecte) => console.log(rejecte)
)