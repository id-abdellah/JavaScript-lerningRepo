/* =====================================================
    Promises

        Fetch API
            - Return a representation of the entire HTTP response
======================================================== */


// promise و كيرجع XHR. كيدير نفس الخدمة ديال ال fetch ال

fetch("https://api.github.com/users/id-abdellah/repos").then((fetchResult) => {
    let myData = fetchResult.json();
    return myData
}).then((myData) => {
    for (let i = 0; i < myData.length; i++) {
        document.body.innerHTML += `
        <div>
            <h3>repo number [${i + 1}]</h3>
            <ul>
                <li>Name: ${myData[i].name}</li>
                <li>id: ${myData[i].id}</li>
                <li>url: <a href="${myData[i].html_url}">${myData[i].html_url}</a></li>
                <li>created at: ${myData[i].created_at}</li>
            </ul>
            <hr>
        </div>
        `
        console.log(i)
    }
})
