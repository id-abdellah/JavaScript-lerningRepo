/* =======================================================
    Loop
        - Looping on sequences
========================================================== */



let arr = ["one", "two", "three", "four", "five", "six"];


// يمكن لك باستعمال التكرار تطبع كل عنصر فالمصفوفة لوحدو

for (let i = 0; i < arr.length; i++) {
    /*
    هي باش اكون الموضوع ديناميكيا. length المغزى من استعمال
    اولا يقدر العناصر اتزادو indefined حيت فاش كدير رقم ثابت يقدر المصفوفة تنقص ويطلع ليك التكرار
    */
    console.log(arr[i]);
}



console.log("%cfilering a divergant array", "color: lightgreen; font-size: 20px")



// تكرار فيه يقدر دير فيه شرط كيقلب نوع البيانات وعلى حسابها كيتفرزو
// الفلترة

let nestedArray = [3, 5, "mohamed", "ahmed", 33, 21, 0, "said", 343, "bahaa", "Fatima", 99, "hamoody"];
console.log(nestedArray)

let arrayOfStrings = [];
let arrayOfNumbers = [];

for (let i = 0; i < nestedArray.length; i++) {
    if (typeof nestedArray[i] === "string") {
        arrayOfStrings.push(nestedArray[i])
    } else {
        arrayOfNumbers.push(nestedArray[i])
    }
}

console.log(arrayOfStrings)
console.log(arrayOfNumbers)