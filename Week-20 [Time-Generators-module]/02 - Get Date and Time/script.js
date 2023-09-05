/* ============================================================
    Date And Time

        Get Date and Time
            - getTime()     => Number of Milliseconds
            - getDate()     => day of the month
            - getFullYear()
            - getMonth()    => Zero index based
            - getDay()      => day of the week
            - getHours() 
            - getMinutes()
            - getSeconds()
=============================================================== */

let dateNow = new Date();
console.log(dateNow);



console.log("")

/* ------------------------ */

// epoch time يمكن ليك تجيب الوقت من اي تاريخ بغيتي ماشي بالضرورة من ال

let myBirthday = new Date("Jan 01, 2003");
let datDiff = dateNow - myBirthday;
console.log(Math.floor(datDiff / 1000 / 60 / 60 / 24 / 364));



console.log("")

/* ------------------------ */

console.log("getTime()", dateNow.getTime()); // كترجع الوقت من 1970 بالميليسكندس

console.log("getDate()", dateNow.getDate());
// كترجع هاد نهار شحال هو فالشهر

console.log("getFullYear()", dateNow.getFullYear()); // return the year

console.log("getMonth()", dateNow.getMonth()); // 7 => august
// 0 كيرجع الشهر بالاندكس يعني الشهر اللول لي هو يناير الاندكس ديالو هو
// باش تجيب سمية الشهر squareBrackets بين method تقد دير مصفوفة فيها اسماء الاشهر, ودير هاد ال

console.log("getDay()", dateNow.getDay()); // 3
// كترد ايام الاسبوع بالاندكس
// نفس الحاجة تقد دير مصفوفة فيها اسماء الايام وتستعمل هاد الطريقة باش تجيب الاندكس ديال النهار لي غيرد ليك سمية اليوم

console.log("getHours()", dateNow.getHours()); // الساعة لي نتا فيها دبا
console.log("getMinutes()", dateNow.getMinutes()); // الدقيقة لي نتا فيها دبا
console.log("getSeconds()", dateNow.getSeconds()); // الثانية لي نتا فيها دبا
console.log("getMilliseconds()", dateNow.getMilliseconds()); // المليثانية لي نتا فيها دبا