/* ============================================================
    Regular Expressions

        Ranges Part-1:

            (x|y|z) => x or y or z
            [0-9]   => 0 to 9
            [^0-9]  => any character but not 0 to 9
=============================================================== */

let tld = "com net org info code io"

// يعني اي واحد تلقا معاه لول io او code او org يعني غيرجع ليك
// غيرد ليك كولشي g modifier الا درتي
let tldReg = /(org|code|io)/

console.log(tld.match(tldReg))




console.log("")



/* ==========  [0-9] Range  ======== */
// كيرد ليك اي رقم فالرينج لي غتعطيه ليها
let nums = "123456789"

console.log(nums.match(/[0-9]/g)); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
console.log(nums.match(/[3-6]/g)); // '3', '4', '5', '6']





console.log("")



/* ==========  [^0-9] Not range  ======== */
// كيرد ليك اي رقم ماعدا لي فالرينج لي عطيتيه ليه

let exNums = "0123456789"

console.log(nums.match(/[^0-3]/g)); // ['4', '5', '6', '7', '8', '9']
console.log(nums.match(/[^4-6]/g)); // ['1', '2', '3', '7', '8', '9']



let specialNums = "!1§2$3%4&5/6(7)8=9"

let specialNumsReg = /[^0-9]/g;
console.log(specialNums.match(specialNumsReg)); // ['!', '§', '$', '%', '&', '/', '(', ')', '=']






console.log("")



/* ========== Practice ======== */

let practice = "os1 os1os os2 os8 os8os os9os";
// os وموراها رقم فرينج معين و مراهم os يعني طالب منو يجد كلمة كتبدا ب
let practiceReg = /os[5-9]os/ig;
console.log(practice.match(practiceReg)); // ['os8os', 'os9os']