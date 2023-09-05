/* ============================================================
    AJAX
    Loop on data

    Search
        - cross origin api 
        - API Authentication
=============================================================== */


let myRequest = new XMLHttpRequest();

myRequest.open("GET", "./testingApi.json");
myRequest.send()

console.log(myRequest)


myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        // js obj ل json لي على شكل respons text حولت ال
        let myData = JSON.parse(this.responseText);
        for (let prop in myData) {
            let div = document.createElement("div");
            let text = document.createTextNode(`${prop}: ${myData[prop]}`);
            div.appendChild(text)
            div.style.cssText = `margin-block: 10px;`;
            document.body.appendChild(div)
        }
    }
}