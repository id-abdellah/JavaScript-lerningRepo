/* =============================================================
    BOM [ Browser Object Model ]

        - setTimeout( function, Timeout, additional params )

        - clearTimeout(handler)
================================================================ */


/* ==================== setTimeout() ==================== */


// معينة بعد وقت معين function تقد تنادي setTimeout عن طريق ال
// anonymous function لي كيقبل هي function ال
// ms الوحدة ديال الوقت هي ال
// 1000 ms => 1s

setTimeout(() => {
    console.log("this Msg will printed in the console after 3s")
}, 3000)


// اولا يقدر تكون ديجا عندك فانكشن

function showMsg() {
    console.log("hello! i am a plain function")
}

setTimeout(showMsg, 5000);




// * Additional arguments

// مكتسمحش انك دير قيمة ديال الباراميترز مع الفنكشن نيشان setTimeout البينة ديال
// Timeout و انما كضيق القيم ديالهم مورا ال

function sayHiToSomeone(user, age) {
    console.log(`Hi, My name is ${user} and i have ${age} years old`)
}

setTimeout(sayHiToSomeone, 6000, "Mohamed", 20);
setTimeout(sayHiToSomeone, 6000, "Osama", 46);




/* ==================== clearTimeout() ==================== */

// لي بغيتي توقف setTimeout() هو لي كيمسك ال handler ال
// id هو handler ال
// كدير رقم الي باغي توقف اولا تقد ديرو نيشان ف متغير setTimeout() يعني كتحسب من لفوق عدد ال

// setTimeout باش يوقف لينا ال button غنديرو
const myBtn = document.querySelector("button");

let iSet = setTimeout(() => {
    document.body.style.backgroundColor = "red"
}, 2000);

myBtn.onclick = () => {
    clearTimeout(iSet); // or clearTimeout(5)
}

// يعني مغيتبدلش الخلفية setTimeout() فاش كتكليكي عليه مغيخدمش ال