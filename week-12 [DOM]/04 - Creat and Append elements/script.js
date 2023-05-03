/* ===========================================================
    DOM [Creat and Append elements]
        - creatElement
        - creatComment
        - creatTextNode
        - creatAttribute
        - appendChild
============================================================== */

let myDivEl = document.createElement("div");

/**
 * creatAttribute
 * و الفرق بينو و بين الطرق اللولة
*/

myDivEl.className = "product";

// ولكن ب قيمة خاوية اي انك تقدر تبقا تبدل فالقيمة ديالو فالمستقبل attr كتنشئ ال creatAttribute ال
// مكانش موجود فلول attr اي كينشئ
// مكانش موجود بالطريق المباشرة لي فالدرس لفايت مغينشئ ليك والو attr حيت الا بغيتي تنشئ
let myAttr = document.createAttribute("data-custom");
// setAttributeNode و كتستدعيه للعنصر بال
myDivEl.setAttributeNode(myAttr)

// لي فات درسناها setAttribute هادي الطريقة لولة اما تانية هي باستعمال
myDivEl.setAttribute("data-testing", "test")



/**
 * creatTextNode
*/

let aText = document.createTextNode("This is Product one");

// ماشي ضروري يكون شي عنصر اخر child حيت النص تا هو .appendChild() وباش تحط النص فالعنصر دير

myDivEl.appendChild(aText)


/**
 * creatComment
*/

let comment = document.createComment("this comment from js file");

// also, append child
myDivEl.appendChild(comment)


// append the element to page body

document.body.appendChild(myDivEl)

console.log(myDivEl)




/* ================================= another ex for practicing ================== */

// to separate the two examples
let separator = document.createElement("hr");
document.body.appendChild(separator)

// ======================0

let infoDiv = document.createElement("div");
let dataAttr = document.createAttribute("data-custom");
infoDiv.className = "my-information";
infoDiv.setAttributeNode(dataAttr)
infoDiv.id = "unique";
infoDiv.setAttribute("title", "this is an informational div")

let theNameHeading = document.createElement("h4");
let theNameText = document.createTextNode("My Name is: Mohamed ID-ABDELLAH");
theNameHeading.appendChild(theNameText)

let skillsHeading = document.createElement("h5");
let skillsText = document.createTextNode("html, css, js, bootstrap, tailwindCss, jQuery");
skillsHeading.appendChild(skillsText)

let myComment = document.createComment("this comment");
theNameHeading.appendChild(myComment)

infoDiv.appendChild(theNameHeading)
infoDiv.appendChild(skillsHeading)

document.body.appendChild(infoDiv)

console.log(infoDiv)