/* =============================================================
    BOM [ Browser Object Model ]

        - open( URL, target / name, windowFeatures )
            -> All the params are optional

        - close()
            -> // open كتسد غا النوافذ لي تحلو عن طريق ال close ال

        - window features:
            - width [Num]
            - height [Num]
            - left [Num]
            - top [Num]

================================================================ */




/* =================== window.open() / close() =================== */

// about:blank غيحل ليك صفحة URL فحالة مدرتيش ال
// غيحل الصفحة ف نافذة جديدة target وفحالة مدرتيش
// كيحل ليك نافذة عادية فنفس المتصفح اما فاش كديرهم كتكون النافذة خارجة عليه features ملي مكديرش

const openBtn = document.querySelector("#openThat")
const closeBtn = document.querySelector("#closeThat")

var myWindow;

function openTheWindow() {
    myWindow = window.open("", "aWindow", "width=500, height=500, top=50, left=100, status=no")
    myWindow.document.write("<h1>this is my new window</h1>")
}
function closeTheWindow() {
    myWindow.close()
}

openBtn.addEventListener("click", openTheWindow)

closeBtn.addEventListener("click", closeTheWindow)