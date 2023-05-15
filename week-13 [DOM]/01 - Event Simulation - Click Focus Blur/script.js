/* =============================================================
    DOM [Event Simulation]
        - click
        - blur
        - focus
================================================================ */

// وهي ان الحدث يطرا من غير تدخل منك
// inputField لشي focus دير load مثلا انفوا الويندو تكمل

let inputField = document.getElementsByClassName("one")

inputField[0].placeholder = "will focused auto"

window.onload = function () {
    inputField[0].focus()
}


// ويديك نيشان لغوغل click ملي تحيد الفوكس منو غيطرا حدث ال
let secondInputField = document.getElementsByClassName("two")

secondInputField[0].onblur = function () {
    document.links[0].click()
}


// event simulation من الامثلة الواقعية لل
// نيشان للمربع لاخر focus كتكون مقسمة ل مربعات, انفوا كتعمر مربع كيدي ال verification code البلاصة لي كتكتب فيها ال
// اولا فاش كتنسخ كود التأكيد كامل و خا طويل و كتلصقو فالخانة اللولة او المربع اللول
// كيشدو و يقسمو على باقي المربعات