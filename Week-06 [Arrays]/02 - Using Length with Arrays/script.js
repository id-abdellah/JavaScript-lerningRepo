/*
    Arrays Method:
        - Length

*/

// فالمصفوفات قبل مندخلو للي جاي length فهاد الشابتر غنحاولو نعرفو كيفاش يقدر نستعملو ال

// اولا غنشوفو كيفاش ضيف عنصر دايناميكلي
// ثانيا كيفاش دير تحديث للعنصر اللخر ديناميكيا
// رابعا كيفاش تحكم عناصر المصفوفات لي بغيتيهم يطبعو

let myArray = ["one", "two", "three", "four"];
console.log(myArray);
console.log(myArray.length); // كيبدا من واحد length بواحد حيت ال index سابق ال length دائما وابدا ال

console.log("");

// اولا
// ديال شي عنصر مكاينش مثلا الاندكس 6 ونتا عندك غار 4 دلعناصر index الاساس انك فاش كتستعمل ال
// عاد غيتبعو القيمة لي درتي فالعنصر ال 6 empty غيطبع ليك 4 دلعناصر اما الخامس غيدير فيه
// الطريقة العادية لبغيتي ضيف عنصر فالمصفوفة انك تحسب شحال من عنصر
// كتمكنك دير اضافة ديناميكيا length ال
myArray[myArray.length] = "newElement";
console.log(myArray);

console.log("");

// ثانيا
// باش دير تحديث للعنصر الاخير دايناميكيا
myArray[myArray.length - 1] = "lastElement updated"; // اي عنصر مضاف غيجي بلاصة العنصر اللخر
console.log(myArray);

console.log("");

// ثالثا
// كتمكن ليك تحكم فعدد العناصر ديال المصفوفة length ال
myArray.length = 2;
console.log(myArray);
