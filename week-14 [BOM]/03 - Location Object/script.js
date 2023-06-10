/* =============================================================
    BOM [ Browser Object Model ]

        Location Object:
            - href Get / Set [URL || Hash || File || Mail]
            - host & hostName
            - hash
            - protocol
            - reload()
            - replace("url")
            - assign("url")
================================================================ */

// اي تبدل فلبيانات Set اي تجيب البيانات او دير ليها Get غاع هاد الخصائص تقد دير ليها





/* ============== Location.href ============== */

// it return or change the HyperText Reference

console.log(location.href);

const btnOne = document.querySelector("#one");
btnOne.onclick = () => {
    location.href = "https://google.com"
}


// * History دبا ال ملي كدخل لشي سيت وتخرج منو كيبقا داك السيت لي خرجتي منو محفوظ فال
// مكتحذفش السيت لي كنتي فيه من السجل و انما كتخليه فيه href و هاد ال
// خرين كيحذفو السيت الي كنتي فيه من السجل methods حيت كاينين





console.log("")




/* ============== Location.hash ============== */

// كيعطيك الهاش الحالي لي فيه دبا نتا
console.log(location.hash)

// تقد تمشي ل هاش معينة فاي موقع
let btnTwo = document.querySelector("#two")
btnTwo.onclick = () => {
    location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#continue_statement"
}



console.log("")



/* ============== Location.host / hostName ============== */

console.log(location.host); // لي نتا داخل منو port كيعطيك اسم الموقع مع ال
console.log(location.hostname); // كيعطيك غا سمية الموقع
console.log(location.port); // 5500

// و انما غا اسم الموقع و تخلي داكشي لاخر كيما هو URL يعني ماشي غاع ال hostName و تقد تغير فقط ال





console.log("")





/* ============== Location.protocol ============== */

console.log(location.protocol); // http: OR https:
// وتقد تاهو تبدلو






/* ============== Location.reload() / replace() / assign() ============== */

// reload is known: location.reload()


// location.replace("url")
// ولكن الصفحة لي كنتي فيها قبل, كتمحيها من السجل يعني متقدش ترجع ليها url كتبدل ال replace() ال


// location.assign("url")
// كتخلي الصفحة لي كنتي فيها فالسجل .href بحال assign() اما ال