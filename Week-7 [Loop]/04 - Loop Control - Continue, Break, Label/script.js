/* =======================================================
    Loop Control
        - Break
        - Continue
        - Label
========================================================== */



let products = ["Keyboard", "Mouse", "Screen", "Pen", "Pad", "Monitor", "Phone"];
let colors = ["Red", "Green", "Yellow", "blue"];


// صغر من 3 وغيدير المطلوب i فطريقة العادية دير ال "screen" مثلا دبا بغيتي تطبع لحد
// حيت المصفوفة يمكن تزيد يمكن تنقص
// loop control ولكن هدا ماشي حل ديناميكي فلذالك كاين ال




/*
    * ================ Break ================
*/

// شرط كيوقف التكرار break ال

for (let i = 0; i < products.length; i++) {
    console.log(products[i])
    if (products[i] === "Screen") {
        break;
    }

    /*
        ? الترتيب مهم
        ف الا درتي الطباعة فوق الشرط ديال الوقوف غيوصل عند العنصر المحدد و غيطبعو عاد غيوقف
        اما الا كانت الطباعة تحت الشرط ف الشرط غيوصل للعنصر المحدد وغيوقف عندو و غيتطبع العناصر لي كانو قبل
    */
}



console.log(`

`)




/* 
    * ================ Continue ================
*/

// انه حتا هو شرط. مثلا فشي مصفوفة عندك كلمات و ارقام continue المبدء ديال ال
// وطبع ليا غا الكلمات continue كتقوليه الى وصلتي عند الارقام تجاهلو و دير


let secondProducts = ["Keyboard", 44, 21, "Mouse", 20, 34, "Screen", "Pen", "Pad", "Monitor", "Phone"];

for (let i = 0; i < secondProducts.length; i++) {
    if (typeof secondProducts[i] === "number") {
        continue;
    }
    console.log(secondProducts[i])

    /*
        ? عوتاني الترتيب مهم
    الا درتي الطباعة فوق الشرط فراه غيطبع ليك المصفوفة كااملة بالكلمات و الحروف continue فالحالة ديال ال
    دار ليه طباعة already حيت كيدير الطباعة للعنصر عاد كيدوز للشرط وكيلقاه رقم و كيتجاهلو ولكن هو

    false اي خاص الطباعة تكون تحت الشرط باش يدوز على الشرط هو اللول عاد ديك الساعة يدير الطباعة فحالة كان 
    */
}



console.log(`

`)





/* 
    * ================ Label ================
*/

// break, continue ومن خلالو يمكن ليك بيه تحكم ف Loop بكل بساطة هو معرف ل Label ال
// يعني يمكن ليك من خلال التكرار الفرعي تحكم فالتكرار الرئيسي


let organisation = ["one", "two", "three"];
let nums = [1, 2, 3];

mainLoop: for (let i = 0; i < organisation.length; i++) {
    console.log(organisation[i])
    nestedLoop: for (let n = 0; n < nums.length; n++) {
        console.log(`- ${nums[n]}`)
        if (nums[n] === 2) {
            break mainLoop;
            // للتكرار الاصلي break يعني الا وصل للعنصر 2 دير
        }
    }
}