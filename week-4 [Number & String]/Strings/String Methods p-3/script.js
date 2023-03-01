/*
String Methods:
        - substring(Start [mand], End [opt] not including end)
            if start > end => will swap
            if start < 0   => it will start from 0
            use length to get last character
        
        - substr(Start [mand], Number of characters u wanna extract)
            if start >= length  => ""
            Negative values starts from the end
        
        These properties output are : "True" or "False"

        - includes(Value [mand], Start [opt]) 
            Start => 0 By default
            ES6
        
        - startsWith(Value [mand], Start [opt]) 
            Start => 0 By default
            ES6

        - endsWith(Value [mand], Length [opt]) 
            Length => byDefault is the full length
            ES6
*/





let x = "mohamed id abdellah";  // length => 19



/* ========================= substring(Start [Mand], End [opt]) ========================= */

console.log(x.substring(2, 7)); // slice() method تالهنا بحال

// وكيردهم عادي swap كيديرليهم start and end انك لغلطي او قلبتي عمدا بين ال substring() من الميزات لي ف
console.log(x.substring(7, 2));

// كيبدا من اللخر negative value لحطيتي slice() فال
// غيبدا من 0 اللول وخا دير -10 negative value دير substring() اما فال
console.log(x.substring(-10, 7));  // 0 - 7


// وحدو مغيعطيك والو لحقاش هو سابق الاندكس بواحد length حيت الا درتي length باش تجيب اخر حرف خاصك دير -1
console.log(x.substring(x.length - 1));  // h

console.log(x.substring(x.length - 4, x.length - 8)); // manipulation


console.log("")





/* ========================= substr(Start [Mand], characters to extract) ========================= */

// First thing: this is a deprecated feature or legacy, don't usit any more but u can learn it 

// فالقيمة تانية كتعطيها شحال او عدد الكراكتر لي بغيتي مور القيمة ديال الديبار
console.log(x.substr(2, 5))
// فغيعطيك سترينغ خاوي يعني والو length اكبر من او يساوي start الا كان ال

// بالنسبة لقيمة السالبة متحتاجش فالقيمة الثانية تعطيه اندكس. عطيها غا عدد الكراكتر لي بغيتي موراه
console.log(x.substr(-5, 3))


console.log("");




/* ========================= includes(Value [mand], Start [opt]) ========================= */

// بحال الا كتقول ليه واش كيحتاوي على السترينغ او الكلمة لي عطيتك دبا ولا لا
// و كيقلب 0 كيبدا من اندكس start الا مكتبتيش ال
console.log(x.includes("id"))  // true

// false ملقاهاش true كيبدا البحث من عندو. لقا النتيجة start value ويلا كتبتي ال
console.log(x.includes("id", 11))


console.log("")




/* ========================= startsWith(Value [mand], Start [opt]) ========================= */

// نفس الكونسيب غار هادي كتسولو واش كيبدا بحرف اولا سترينغ
// ماشي الاندكس length كيتحسب بال position ال
console.log(x.startsWith("m"));  // المتغير كامل
console.log(x.startsWith("a", 4));  // false => m
console.log(x.startsWith("abde", 11));


console.log("")





/* ========================= endsWith(Value [mand], length [opt]) ========================= */

// و فالخر ديالو غتشوف واش كيكمل بداك الحرف لي قلتي اولا لا lenght هي كتحسب بال

// حيت محددتيش ليه الطول h هنا غيشد المتغير كامل ويشوف واش كيكمل ب
console.log(x.endsWith("h"))

// كيقل اللخر ديال داكشي لي حددتي ليه وحدو ماشي المتغير كامل length ويلا حددتي ليه
console.log(x.endsWith("e", 7))  // 7 - mohamed => ends with d

// وماشي ضروري حرف واحد يمكن دير جملة كاملة اولا حرفين او تلاتة لي كان