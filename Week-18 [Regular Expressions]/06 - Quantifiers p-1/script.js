/* ============================================================
    Regular Expressions

            Quantifiers :

                n+  => one or more
                n*  => zero or more
                n?  => zero or one

=============================================================== */

// هما الكراكتر لي كتعاونك تحدد الكمية quantifiers ال



/* ================= n+ ================= */
// هادي كتعني كاين يما واحد اولا كتر

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";

let mailsRegex = /\w@\w\w.sa/ig; // هدا باترن بسيط كيماتش غا الايمايل اللول
console.log(mails.match(mailsRegex)); // ['o@nn.sa']


// يعني وورد كراكتر واحد او اكتر \w+
let sMailRegex = /\w+@\w+.(com|ru)/ig;
console.log(mails.match(sMailRegex)); // ['osama@gmail.com', 'osama@mail.ru']






console.log("")


/* ================= n* ================= */
// يقدر يكون كتر يقدر ميكون غاع

let nums = "0110 10 150 05120 0560 350 00";


// هادي مغترجعش جوج الزيروات لخرين حيت قلنا ليه يقدر يكون بيناتهم رقم او اكتر
let numsRegex = /0\d+0/ig;
console.log(nums.match(numsRegex)); // ['0110', '05120', '0560']


// اما فهادي غترجعو حيت قلنا ليه اقدر يكون بيناتهم ارقام اقدر لا. لمهم الا كان كيبدا وكيكمل بزيرو رجعو
let sNumsRegex = /0\d*0/ig;
console.log(nums.match(sNumsRegex)); // ['0110', '05120', '0560', '00']







console.log("");


/* ================= n? ================= */
// يا كاين يا مكاينش

let urls = "https://google.com http://www.website.net web.com";

// تكون اقدر متكونش s اقدر هاد ال
let urlsRegex = /https?/ig;
console.log(urls.match(urlsRegex)); // ['https', 'http']


let sUrlsRegex = /(https?:\/\/)?(www.)?\w+.\w+/ig; // ['https://google.com', 'http://www.website.net', 'web.com']
console.log(urls.match(sUrlsRegex));