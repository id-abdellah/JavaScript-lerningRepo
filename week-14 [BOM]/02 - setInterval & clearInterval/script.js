/* =============================================================
    BOM [ Browser Object Model ]

        - setInterval( function, milliseconds, additional params )

        - clearInterval(handler)
================================================================ */

// كيقبلو نفس القيم و نفس الحوايج setTimeout() و ال setInterval() ال
// مرة وحدة function من بعد مدة معينة كتستدعي setTimeout() الفرق بيناتهم ان
// لي كتعطيها مرارا و تكرارا وكتحدد الوقت لي بغيتي بين كل مرة و مرة function كنفذ ال setInterval() اما ال

let counter = 0;

let myInterval = setInterval(() => {
    console.log(`${++counter}: Hi Bro`)
    if (counter == 20) {
        clearInterval(myInterval)
    }
}, 1000);




const div = document.querySelector("div");

function countDown() {
    div.innerText -= 1;
    if (div.innerText == 0) {
        clearInterval(cDownDiv)
    }
}

let cDownDiv = setInterval(countDown, 1000);