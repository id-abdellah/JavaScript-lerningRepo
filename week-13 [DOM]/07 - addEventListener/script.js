/* =============================================================
    DOM [ addEventListener ]

================================================================ */

let myFirstP = document.getElementById("myP1");

// خاصهم يدارو بجوج بواحد الكليك فشي عنصر function الا كانو عندك جوج click دبا فال الحدث العادي مثلا ال
// عند الكليك غيخدم غالسطر الثاني حيت غيغطي على اللول

function one() {
    console.log("click 1")
}
function two() {
    console.log("click 2")
}

myFirstP.onclick = one;
myFirstP.onclick = two; // this who is will work


// الحاجة الثانية انك فاش دير هاد السينتاكس
// error للصفحة مكيناش شي حاجة تقول ليك بلي راه هادشي load العادي واخا دير
window.onload = "hello";





// addEventListener

let mySecondP = document.getElementById("myP2");

mySecondP.addEventListener("click", one)
mySecondP.addEventListener("click", two)
// فدقة وحدة function شحال من attach يمكن لي ت addEventListener باستخدام



// mySecondP.addEventListener("click", "string") // error


/* ================================ */

// حسب الشيخ اسامة addEventListener اهم حاجة غتستخدم على قبلها ال
// لشي عنصر لسا مش موجود فالصفحة event وهو انك تحط


// يكتب فالكونسول بلي هادي راه نسخة ماشي الاصلي P فمثلا انا باغي نكليكي على النسخة المستنسخة من هاد ال

let imp = document.getElementById("imp");

imp.onclick = function () {
    let impCloned = imp.cloneNode(true);
    impCloned.className = "cloned";
    document.body.appendChild(impCloned)
}


document.addEventListener("click", function (e) {
    // document كتعطيك شنو علاياش وركتي فال target ال
    if (e.target.className == "cloned") {
        console.log("i am cloned")
        // print on console لي وطيتي عليه الا كان الكلاس ديالو كدا target يعني ال
        // وبهذا وصلتي للعنصر المستنسخ فقط اولا العنصر لي بغيتي
    }
})