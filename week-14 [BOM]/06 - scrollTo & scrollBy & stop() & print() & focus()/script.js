/* =============================================================
    BOM [ Browser Object Model ]

        - stop()

        - print()

        - focus()

        - scrollTo(x, y || Options)

        - scroll(x, y || Options)

        - scrollBy(x, y || Options)
================================================================ */





/* =================== window.stop() ===================  */

// المتصفح كيشد واحد بواحد و كيشارجيه باش اعرضوا ليك resources دبا ملي كدخل لشي سيت عامر
// فلكيبورد فراه كيوقف التحميل esc فوسط هاد التحميل ديال الموقع فاش كتورك على

// فراه كيوقف تحميل الموارد ديال السيت window.stop() نفس القضية فاش كدير





/* =================== window.print() ===================  */

// كدير طباعة للصفحة ctrl + p نفس القضية ديال
// print من الاستخدامات هو انك دير زر كتورك عليه كيدير
// لجزئ معين من الصفحة print من بعد غتعرف كيفاش دير





/* =================== window.focus() ===================  */

// window.open() لي حليتي بال window وهي انك دير تركيز على ال

const openBtn = document.getElementById("one")
const focusBtn = document.getElementById("two")

let myWindow;

function opentIt() {
    myWindow = window.open("http://elzero.org", "_blank", "width=400, height=400")
}
openBtn.addEventListener("click", opentIt)

// دبا فاش غتورك على الزر غتحل ليك ويندو جديدة
// وغيتحول الفوكس عليها myWindow.focus() سير للكونسول ديال هاد الصفحة لي حليتي منها ديك الويندو و دير








/* =================== window.scrollTo() || window.scroll() ===================  */

// safari ممدعوماش لحد الان فال scroll() بجوجهم نفس الحاجة غار ال
// هادي كتسكرولي لنقطة معينة يعني لعوتي ستدعيتيها مغتسكروليش مزال حيت وصلتي للنقطة لي بغيتي
// ديال السكرول behavior وتقد تحكم فال

let scrollToBtn = document.getElementById("two")

scrollToBtn.addEventListener("click", () => {
    window.scrollTo({
        left: 1000,
        top: 1000,
        behavior: "smooth"
    })
})






/* =================== window.scrollBy() ===================  */

// غار هادي كل مرة كتستدعيها كتزيد قيمة على السكرول القديم scrollTo بالنسبة لهادي بحالها بحال
// بحالا غلتي بشحال غادي تبقا تحرك

let scrollByBtn = document.getElementById("three")

scrollByBtn.addEventListener("click", () => {
    window.scrollBy({
        left: 500,
        top: 500,
        behavior: "smooth"
    })
})