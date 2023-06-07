/* ===============================================================
    - Default Function Parameters [Undefined]
    - Old Strategies [Condition + Logical Or]
    - ES6 Method
================================================================== */


/*
    ? default function parametrs

    Undefined كترجع ليك argument و مكديرش القيمة ديالها فالا parameter دبا فاش كتحط شي متغير ك
    Undefined يعني القيمة الافتراضية للبراميتر هي

    فاش مكيدير قيمة لشي بارام undefined ومن الطبيعي انك ماشي منطقي تطلع لبنادم

*/


function sayHi(userName, age = "Unknown" /* New ways [ES6] */) {
    // Old Ways
    /*
        if (age === undefined) {
            age = "Unknown"
        }
    */
    /*
        age = age || "unknown";
    */
    console.log(`Hi ${userName} your age is ${age}`)
}

sayHi("Mohamed", 18)
sayHi("Mohamed")
