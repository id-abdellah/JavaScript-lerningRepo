/* ============================================================
    Regular Expressions

            Character Classes:


                . => matches any character, except newline or other line terminators

                \w => matche word characters, [a-z, A-Z, 0-9, underscore]
                \W => matche non word characters

                \d => matches digits from 0 to 9
                \D => mathces non digits charcters

                \s => matches whitespaces character
                \S => matches non whitespaces character

=============================================================== */


let emails = "o@@@@...com o@g.com o@g.net A@Y.com o-g.com o@s.org 1@1.com";



let dot = /./g;
// هادي غترجع غا السترينغ وتا المسافات
console.log(emails.match(dot));


let word = /\w/g;
let nonWord = /\W/g;

console.log(emails.match(word));
// ['o', 'c', 'o', 'm', 'o', 'g', 'c', 'o', 'm', 'o', 'g', 'n', 'e', 't', 'A', 'Y', 'c', 'o', 'm', 'o', 'g', 'c', 'o', 'm', 'o', 's', 'o', 'r', 'g', '1', '1', 'c', 'o', 'm']
console.log(emails.match(nonWord));
// ['@', '@', '@', '@', '.', '.', '.', ' ', '@', '.', ' ', '@', '.', ' ', '@', '.', ' ', '-', '.', ' ', '@', '.', ' ', '@', '.']

// نفس الكونسيبت بالنسبة للوخرين
// كترجع غا الارقام والعكس ديالها كترجع كولشي الا الارقام \d ال
// كترجع غا المسافات اما العكس ديالها كترجع كوولشي الا المسافات \s ال






// Practice for valide emails

let validesEmails = /\w@\w(.com|.net)/g;
console.log(emails.match(validesEmails)); // ['o@g.com', 'o@g.net', 'A@Y.com', '1@1.com']

// هدا مثال بسييييط جدا ل نمط ديال الايميل من بعد غنعرفو كيفاش نحسبو الاحرف