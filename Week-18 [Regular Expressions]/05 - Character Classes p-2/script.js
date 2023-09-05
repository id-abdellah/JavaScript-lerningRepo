/* ============================================================
    Regular Expressions

            Character Classes:


                \b => matches at the beginnig or end of a word
                \B => matches not at the beginnig or end of a word
            

                Test Method:
                    pattern.test(input)

=============================================================== */

let names = "Sayed 1spam 25spam 35spam spam4 spam5 Mohamed ahmed Aspamo";

// فينما كانت سواء الوسط او اللخر او البداية spam غيجي ليك اي كلمة pattern بالنسبة لهاد ال
let regex = /spam/ig;
console.log(names.match(regex)); // ['spam', 'spam', 'spam', 'spam', 'spam']



// spam هادي كتجبد الاسماء لي كتبدا ب
let sRegex = /\bspam/ig;
console.log(names.match(sRegex)); // ['spam', 'spam']



// spam وهادي الاسماء لي كتكمل بكلمة
let tRegex = /spam\b/ig;
console.log(names.match(tRegex)); // ['spam', 'spam', 'spam']




// spam كتبدا او كتنتاهي بكلمة
let fRegex = /(\bspam|spam\b)/ig;
console.log(names.match(fRegex)); // ['spam', 'spam', 'spam', 'spam', 'spam']






/* ====================== test method ====================== */

// pattern على حسب ال true or false كترجع
// if statement و كتستعمل مع ال
console.log(/\bspam/ig.test("20Spam")); // false
console.log(/\bspam/ig.test("spamerrs")); // true