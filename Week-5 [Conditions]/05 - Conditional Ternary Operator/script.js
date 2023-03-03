/*
    Conditional Ternary Operator

    Syntax: 
        condition ? if true : if false
*/

// المختصرة if وهي ال
// اولا هي غار مختصرة بحال الا فحالة كان شي كونديشن بسيط تقدر ديرو بيها يعني ماشي تسمع مختصرة وتبقا تخدم ليها وتنسا الاصلية




// غنطبقو على هاد المتغيرات في سبيل الفهم


// let theName = "Ahmed";
// let theGender = "Male";
let theName = "Fatima";
let theGender = "Female";
let theAge = 30;

// using original "if"
if (theGender === "Female") {
    console.log("Mrs")
} else {
    console.log("Mr")
}

console.log("")


// using ternary operator

theGender === "Female" ? console.log("Mrs") : console.log("Mr")


// يمكن لك تخزن الشرط فشي متغير. يعني النتيجة ديال الشرط غتخزن
// اي بلا مدير طباعة الكونسول حيت النتيجة لي غطلع من الشرط غتتخزن فالمتغير ويمكن لك ديرها فاي قنت
let result = theGender === "Female" ? "Mrs" : "Mr";
document.write(result);


// ويمكن لك تطبع السطر ديال الشرط فاي بلاصة مثلا تطبعو فالكونسول نيشان وغيطلع ليك النتيجة
console.log(theGender === "Female" ? "Mrs" : "Mr");


// باش تطبع رسالة على حساب الشرط template literals & concatenate بل و يمكن لك تخدم ال
console.log(`Hello ${theGender === "Female" ? "Mrs" : "Mr"} ${theName}`)


console.log("")


/*
    * وحدة if condition هادشي كامل لي لفوق فحالة كانت
    * اي شرط ثاني و ثالث الخ else if دبا غنشوفو فحالة كانت
*/


theAge < 20     // الشرط اللول 
    ? console.log("20")  // الا تحقق الشرط اللول هادشي لي غيطرا
    : theAge > 20 && theAge < 60  // الشرط الثاني
        ? console.log("20 to 60")  // الا تحقق الشرط الثاني هادشي لي غيطرا
        : theAge > 60  // الشرط الثالت
            ? console.log("larger than 60")  // الا تحقق التالت هادشي لي غيطرا
            : console.log("Unknown Age")  // ديال الشرط false اللخرة او ال else فحالة متحقق ولا واحد هدي ال