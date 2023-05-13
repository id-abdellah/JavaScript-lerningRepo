// assignment 2 

let images = document.querySelectorAll("#pics img");
for (let i = 0; i < images.length; i++) {
    images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    images[i].alt = "Obito";
}
let div = document.getElementById("pics");
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.justifyContent = "center";
div.style.gap = 20 + "px";




// Assignment 3 => currency changes

let getFormInp = document.querySelector("#currencyChanges form input");
let resultFeild = document.querySelector("#currencyChanges form div");

getFormInp.onchange = function () {
    resultFeild.textContent = `[${getFormInp.value}] USD Dollar = [${(getFormInp.value * 9.98).toFixed(2)}] Moroccan Dirham`;
}



// Assignment 4

let one = document.getElementsByClassName("one");
let two = document.getElementsByClassName("two");

// one[0].title = one[0].getAttribute("class");
// one[0].textContent = one[0].getAttribute("class");
// two[0].title = two[0].getAttribute("class");
// two[0].textContent = two[0].getAttribute("class");

[one[0].title, one[0].textContent] = [one[0].getAttribute("class"), one[0].getAttribute("class")];
[two[0].title, two[0].textContent] = [two[0].getAttribute("class"), two[0].getAttribute("class")]




// Assignment 5

let secondPics = document.getElementById("secondPics");

for (let i = 0; i < secondPics.children.length; i++) {
    if (secondPics.children[i].alt == "") {
        secondPics.children[i].alt = "Obito New"
    } else {
        secondPics.children[i].alt = "Old"
    }
}

console.log(secondPics)



// Assignment 6

let numInp = document.getElementById("numInp");

let contentInp = document.getElementById("contentInp");

let select = document.querySelector("#creatsEl .creatsCon select");

let submitBtn = document.getElementById("submit");

let results = document.getElementById("results");





document.forms[1].onsubmit = function (event) {
    event.preventDefault()
    let div = document.createElement("div");
    let divText = document.createTextNode(contentInp.value);
    div.appendChild(divText)
    div.setAttribute("class", "hsm")

    let section = document.createElement("section")
    let sectionText = document.createTextNode(contentInp.value);
    section.appendChild(sectionText)
    section.setAttribute("class", "hsm")

    if (select.value === "div") {
        for (let i = 0; i < Number(numInp.value); i++) {
            results.appendChild(div.cloneNode(true))
        }
    } else {
        for (let i = 0; i < Number(numInp.value); i++) {
            results.appendChild(section.cloneNode(true))
        }
    }

}