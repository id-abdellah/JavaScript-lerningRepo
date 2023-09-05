/* ============================================================
    Date And Time

        Set Date and Time

            - setTime( Milliseconds )

            - setDate() => Day of the month [ Negative and Positive ]

            - setFullYear( year, month => opt [0-11], day => opt [1-31] ) 

            - setMonth( month [0-11], day => opt [1-31] ) [ - or +]

            - setHours( hours [0-23], minutes => opt [0-59], seconds => opt [0-59], ms => opt [0-999] )
            
            - setMinutes( minutes [0-59], seconds => opt [0-59], ms => opt [0-999] )

            - setSeconds( seconds [0-59], ms => opt [0-999] )
=============================================================== */

let currentDate = new Date();
console.log(currentDate);



console.log("")

/* ------------------------- */

// كتطلب منك دخل شحال من ميلي ثانية دازت على بداية الوقت
// time unix يعني فهاد المثال دبا دازت 5 دلميون ميلي ثانية على بداية ال
currentDate.setTime(5000000)
console.log("setTime() =>", currentDate);


/* ------------------------- */

let currentDate2 = new Date();

// فحالة درتي رقم سالب كيرجع للشهر الفايت. ولدرتي فوق 31 يوم كيدخل فشهر جاي
// وهاد القضية ديال القيمة الموجبة و السالبة كتنطابق على غااع لي جاي
currentDate2.setDate(20); // Sun Aug 20 2023 23:33:19 GMT+0100 (غرينتش+01:00)
console.log("setDate() =>", currentDate2);


/* ------------------------- */

currentDate2.setFullYear(2003, 10);
console.log("setFullYear() =>", currentDate2); // Wed Aug 20 2003 23:37:15 GMT+0000 (غرينتش)


// لوخرين حيت نفس القضية methods of set بلا منكملو غا ال
// القيمة لي كبر كتزيد بيك للقدام ولي صغر كترجعك للور
