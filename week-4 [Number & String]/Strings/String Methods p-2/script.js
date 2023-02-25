/*
String Methods:

        - indexOf(Value [mand], Start [opt])

        - lastIndexOf(Value [mand], Start [opt])

        - slice(Start [mand], End [opt] not include end)
        
        - repeat(xTimes) (ES6)

        - split(Separator [opt], Limit [opt])


    [mand] => manditory إجباري
    [opt]  => optionaly
*/




let x = "Mohamed Id Abdellah";


/* ========================= indexOf(value, start [opt]) ========================= */

// كتعطيه الكاراكتر لي بغيتي و كيرجع ليه البوزيشن ديالها فين
// الا ملقاش القيمة لي عطيتيها ليه كيرجع -1

console.log(x.indexOf("Id")) // 8
// position هنا عطاك البداية ديال القيمة لي عطيتي ليه و هي ال 8
// كيبدا من الزيرو اي من اللول by default فراه start position فحالة معطيتيش ليه

console.log(x.indexOf("Id", 9))
// هنا عارفين بلي هاد السترينغ كتبدا من 8 وانا قلت ليه يبدا الاندكس من 9 يعني مغيلقاهاش اذن غيرجع ليا -1


console.log("")





/* ========================= lastIndexOf(value, start [opt]) ========================= */

// كتبدا الاندكس من اللخر
console.log(x.lastIndexOf("a")) 
// حيت بدا من لخر a فهادي عطاني الاندكس ديال اخر
// بحال اللولة الا ملقاش القيمة غيرجع ليك -1


console.log("")





/* ========================= slice(start, end [opt]) ========================= */

// القطع


console.log(x.slice(0))
// كيبدا من لول دسترينغ تال اللخر حيت محدتيش ليه فين يوقف 0 فاش كدير


console.log(x.slice(0, 7))
// الرقم اللخر او النهاية مكتكونش محسوبة
// يعني باش تجيب اخر حاجة خاصك تفوت الاندكس ديالها ب 1 باش يجيبها كاملة


console.log(x.slice(-8, -4))  //Abde
// اي الارقام السالبة حيت غتبدا من اللور negative value الا بغيتي تبدا القطع من اللخر خاصك تستعمل


console.log("")





/* ========================= repeat(Times) ========================= */

// التكرار، او عدد النسخ لي باغي ضيفها
console.log(x.repeat(4))

// small test on chain method
console.log(x.slice(8, 11).repeat(3))


console.log("")





/* ========================= split(Separator [opt], Limit [opt]) ========================= */

// array كتقص السترينغ او العنصر و كترجع ليك منو

console.log(x.split())
// array فاش مكتعطيهش تا قيمة كيرجع ليك عنصر واحد


console.log(x.split(""))
// كيقص كلشي الحروف و الارقام و تا المسافات emptyString كقيمة ستريغ خاوية separator فاش كتعطيه


console.log(x.split(" "))
// كيقص من عند المسافات يعني نهاية كل كلمة كيقص المسافة و يحط الكلمة لي موراها
// وتا لكانت بلاصة المسافات اي علامة كتحط ديك العلامة و كيقص من عندها


// كتقوليه شحال من مرة يقص limit ال
console.log(x.split("", 7))
console.log(x.split(" ", 2))