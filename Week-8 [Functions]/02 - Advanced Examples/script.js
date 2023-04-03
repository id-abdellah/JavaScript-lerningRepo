/* ===============================================================
    Function Advanced examples
================================================================== */


// parameter يمكن ليك دير اكتر من

function sayHi(userName, age) {
    console.log(`Hi ${userName} your age is ${age} years old`)
}

// Undefined فراه غيرجع ليك argument و محطيتيش القيمة ديالو اي parameter فحالة كان شي متغير فال
sayHi("Mohamed", 20)





console.log(`

`)



// فالدالة if condition دبا غنستعملو

function secondSayHi(theName, theAge) {
    if (theAge < 20) {
        console.log(`Sorry, But your age doesn't allow us to show u this content`)
    } else {
        console.log(`Hi ${theName} your age is ${theAge} years old. you are accepted to see this content`)
    }
}

secondSayHi("ahmed", 20)
secondSayHi("mahmoud", 16)
secondSayHi("safae", 32)





console.log(`

`)




//  مابين رقم و رقم او مابين سنة و سنة range مثال ل دالة كطبع ليك

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
    }
}

generateYears(2002, 2023, 2020);
// القيمة اللولة ديال البداية و تانية النهاية و التالتة السنة او الرقم لي بغيت نجاهلو ومنطبعوش