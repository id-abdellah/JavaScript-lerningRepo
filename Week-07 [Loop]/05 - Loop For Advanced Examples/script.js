/*
  Loop For Advanced Example
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;

for (; ;) {
    console.log(products[i]);
    i++;
    if (i === products.length) break;
}

/*
 * يمكن لك تكتبو قبل التكرار وتخدم بيه inline variable. هو i كيما شفنا فاللو فالمتغير
 * لي انفوا يوصل العد لطول المصفوفة يحبس if codition الشرط كيبقا شرط يمكن ليك دير
 * فتاهي يمكن ليك ديرها لداخل ديال التكرار بشرط تكون تحت الطباعة step اما ال
*/