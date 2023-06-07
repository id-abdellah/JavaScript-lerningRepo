/* =============================================================
    DOM [Validation form]
        - prevent default
        - form validation
================================================================ */


/* ====== preventDeafault() ======= */

let lnk = document.links[0];

lnk.onclick = function (event) {
    console.log(event)
    event.preventDefault()
}

// event دبال هاد اللينك فالكليك مررت ليه باراميتر فالفانكش لي هو
// اولا الفانكشن dom event يمكن ليك دير ليه كونسول باش ملي دار الفانكشن يبين ليك المعلومات على داك ال
// يعني دبا فهاد الليان وخا دير كليك مغيطرا والو event و كيدار باش ايضا تحبس السلوك ديال ال
// preventDefault() حيت بسباب ال
// submit ويمكن ليك تا تحبس بيه السلوك ديال الفورم يعني تخليه متسيفطش البيانات فاش كيدار ليها



/* ==================================== */

let form = document.forms[0];


let userinput = document.querySelector("[name='username']");
let userage = document.querySelector("[name='userage']");


form.onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    if (userinput.value !== "" && userinput.value.length <= 10) {
        userValid = true;
    }

    if (userage.value !== "") {
        ageValid = true;
    }

    if (userValid === false || ageValid === false) {
        e.preventDefault()
    }

}

// inputs حيت مزال مطرا والو فال false الخلاصة. اننا فلبداية كنديرو متغير ب قيمة
// وديك ساعة سيفط البيانات true ل false وفاش يتكتب شي حاجة فيها وتكون صحيحة بدل ديك ال