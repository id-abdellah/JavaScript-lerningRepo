/*
String Methods:
    - concat()
    - trimEnd() & trimStart()
    - padStart() & padEnd()
    - replace()
*/



/* ========================= concat() ========================= */

// كضيف سترينغ على سترينغ اخرة concat() ال
let a = "Hello", b = "myFriends";
console.log(a.concat(" ", b))

console.log("")





/* ========================= trimEnd() & trimStart() ========================= */

// غار هادو وحدة كتحيد المسافات من اللخر ديال السترينغ وحدو و التانية كتحدو من القدام بوحدو trim() بحال ال
let c = "     Mohamed     ";
console.log(c)
console.log(c.trimStart())  //  "Mohamed     "
console.log(c.trimEnd())    //  "     Mohamed"

console.log("");





/* ========================= padStart(nmbr, "Value") & padEnd(nmbr, "Value") ========================= */

// ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.
// The padEnd() method is a string method. To pad a number, convert the number to a string first.


let d = "5";
console.log(d)
console.log(d.padStart(4, "x"))
console.log(d.padEnd(4, "x"))

// Use Case

const fullNumber = "3948024852013528";
const las4Digits = fullNumber.slice(-4);
const maskNumber = las4Digits.padStart(fullNumber.length, "*");
console.log(maskNumber);  // Expected output: **********3528

// another use case

const telNmbr = "0612345678";
const first2Digits = telNmbr.slice(0, 2);
const last2Digits = telNmbr.slice(-2);
console.log(`${first2Digits}${last2Digits.padStart(telNmbr.length - 2, "*")}`);
// expexcted output: 06********78

console.log("");
console.log("");





/* ========================= replace(old, New) replaceAll() ========================= */

// replace()
// كتقد من خلالها تبدل سترينغ بستريغ اخرا
// كتبدل غار الرقم اللول للسترينغ لي ختاريتي تبدل فحالة كانت كتكرر

let text = "Hi There! are you hungry hungry hungry";
console.log(text)
console.log(text.replace("hungry", "OK"))


// replaceAll()
// كتبدل السترينغ لي كتعاود كاملة. يعني لتعاودات السترينغ بزاف دالمرات، كتبدلهم كاملين للسترينغ اللول 
console.log(text.replaceAll("hungry", "OK"))