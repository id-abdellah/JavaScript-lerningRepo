/* =============================================================
    DOM Events

    There is too much events but this is some of them

        - onclick
        - oncontextmenu
        - onmouseenter
        - onmouseleave

        - onload
        - onscroll
        - onresize

        Form events
        - onfocus
        - onblur
        - onsubmit

================================================================ */

// anonymous function عن طريق js code اولا في HTML يمكن ليك تستعمل الاحداث سوا فال


/* ==== onclick ==== */

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
    document.body.style.backgroundColor = "lightblue"
}




/* ==== oncontextmenu ==== */

// على الماوس right click هي القائمة الصغيرة لي كتبان ليك فاش كدير
// وكيدير ليك وحدة من عندو هو default browser context menu كيحيدو google drive كاينين سيتات بحال




/* ==== onmouseenter  &  onmouseleave ==== */

// اللولة فاش الماوس كيدير انتر على الشيء يعني اول ما الماوس كيدخل عليه. تقريبا بحال الهوفر
// اما التانية فاش كيخرج الماوس منو

let mySecondBtn = document.getElementById("btnTwo");

// غيرجع اللون كيما كان leave غيتبدل اللون دالصفحة, وفاش غدير enter فهاد المثال فاش الماوس غدير
mySecondBtn.onmouseenter = function () {
    document.body.style.backgroundColor = "yellowgreen"
}

mySecondBtn.onmouseleave = function () {
    document.body.style.backgroundColor = "unset"
}




/* ==== onscroll ==== */

// يديه لفووق button و من الوظائف انك تخلي المستخدم فاش يسكرولي لشي نقطة معينة تبين ليه
window.onscroll = () => {
    console.log("scroll")
}




/* ==== onresize ==== */

// resize كيداير ليها window كيدير الوظيفة لي بغيتي فاش ال





/* ==== onfocus  &  onblur ==== */

// يعني فاش كتركز الماوس على الانبوت وكتبقا تكتب onfocus ال
// تبين ليه شي معلومات على الباسوورد مثلا خاصو يكون 10 ارقام focus ويقد تخلي المستخدم فاش يدير

// focus يعني فاش كتحيد منو ال input هو لي فاش كتخرج من ال blur اما ال
// تمشي دير فحص واش مقبول ولا لا input ويمكن تستعملو ف ان المستخدم فاش يدير الباسوورد و يخرج من ال




/* ==== onsubmit ==== */

// form لل submit فاش كدير
// يقدر قبل متخلي الفورم تتسيفط للباك اند تشوف نتا عندك فالكلاينتسايد واش كلشي مقاد يعني واش الحقول كاملين عامرين اولا لا ...الخ
