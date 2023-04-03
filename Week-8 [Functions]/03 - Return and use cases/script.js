/* ===============================================================
    Function

        - Return
        - Automatic Semicolon Insertion (ASI) [no line terminator allowed]
        - Interreputing

================================================================== */



// مباشرة يعني مشات نيشات و طبعات فال كونسول داكشي لي بغيتي task فهادي دارت ال
// مباشرة task فالعادي راك غير ملزم دير ال
// كمثال. ان الدالة يقدر تكون كدير حسابات ونتا بغيتي ترد ليك النتيجة وتبقا عندك
function sayHi(userName) {
    console.log(`Hi ${userName}`)
}

sayHi("Ahmed");




console.log(`

`)




// * Return ولهذا كنستعملو ال

function secondSayHi(secondName) {
    return `Hi ${secondName}`
}

// مغيطلع ليك والو secondSayHi(...) الا درتي نيشان
// خاصك ديرها ف الكونسول
console.log(secondSayHi("Mohamed"))

// اولا يقدر تخزنها ف متغير
let result = secondSayHi("MohamedTwo");





console.log(`

`)






// * return مثال منطقي ل كيفاش كيخدم ال

function calculation(num1, num2) {
    return num1 + num2
}
let resultOfCalc = calculation(100, 200);
console.log(resultOfCalc)





// * info about return

/*
   ? excution ماينفعش دير شي كود موراها حيت هي كدار اخر حاجة و كتوقف ال return ال
   ? return اي تنزل النتيجة لي بغيتي ترجع ليك تحت ال line terminator ايضا مينفعش دير
*/





console.log(`

`)





// * اي توقف الدالة عند مرحلة ما interrupting of function باش دير return يمكن ليك تستعمل ال

function generate(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i)
        if (i === 15) {
            return `Interrupting`
        }
    }
}

generate(1, 20)