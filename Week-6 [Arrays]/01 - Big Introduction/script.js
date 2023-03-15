/* ===========================================================
    Arrays:
        - Create Arrays => new Array() + []
        - Access arrays elements 
        - Nested arrays 
        - Change arrays elements
        - Check for arrays  Array.isArry(arr)
============================================================== */




/* ======================== Creat arrays ======================== */

// array كاينين جوج طرق باش تقاد
// وينصح عدم استعمالها في الوقت الراهن new Array() اللولة هي تستعمل;
let newArray = new Array("elementOne", "elementTwo", "elementThree", "elementFour");
console.log(newArray)

// وهي المستعمل و المنتشرة [] الثانية هي تستعمل
let bracketArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(bracketArray);


console.log("%c======================", "font-size: 18px; color: red")




/* ======================== Access arrays elements ======================== */

// array يمكن ليك تأكسس على اي ايليمنت ديال ال
// 0 نفس الحاجة الاندكس كيبدا من

let myFriend = ["rachid", "atik", "ahmed", "khalid", "soufyan"];
console.log(myFriend)
console.log(myFriend[0])
console.log(myFriend[1])
console.log(myFriend[2])

// element of array ويمكن ليك تاكسس على البيانات لي فلداخل ديال شي
console.log(myFriend[1][0])


console.log("%c======================", "font-size: 18px; color: red")




/* ======================== Nested arrays ======================== */

// another array فلداخل ديال array

let myFamilly = ["brahim", "khalid", "mohamed", "said", ["aicha", "khadija", "ouafae"]];
console.log(myFamilly);
// لي لداخل ستعمل الاندكس ديالها array باش ت اكسس لل
console.log(myFamilly[4])
console.log(myFamilly[4][1])
console.log(myFamilly[4][1][2])


console.log("%c======================", "font-size: 18px; color: red")




/* ======================== Change arrays element ======================== */

// myFamilly Array غنطبقو على

console.log(myFamilly); // كيما هي array هنا غيطبع ليك ال
myFamilly[1] = "Has changed"; // هادي هي الطريقة باش تبدل شي عنصر ف المصفوفة
console.log(myFamilly);


// يمكن لك تبدلها كاملة بعنصر او بمصفوفة اخرا myFamily وتا المصفوفة لي فلداخل ديال
// او تبدل عنصر واحد منها

myFamilly[4] = "Nested array changed";
// myFamilly[4][0] = "Fatim";
// myFamilly[4] = [1, 2, 3, 4, 5];
console.log(myFamilly)


console.log("%c======================", "font-size: 18px; color: red")




/* ======================== Array.isArray() ======================== */

// Object لشي مصفوفة كيقولك بلي النوع ديالها typeof دبا فاش كدير

console.log(typeof myFamilly)

// true or false و كترجع Array.isArray(arr) لحل هاد المعضلة وتشوف واش البيانات مصفوفة اولا لا ستعمل
console.log(Array.isArray(myFamilly))

let str = "string";
console.log(Array.isArray(str))