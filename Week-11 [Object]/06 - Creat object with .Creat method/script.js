/* ======================================================
    Creat object with Creat Method
========================================================= */

let obj = {
    theName: "Mohamed",
    theAge: 20,
    ageDouble: function () {
        return this.theAge * 2
    }
};
console.log(obj.theName)
console.log(obj.theAge)
console.log(obj.ageDouble())



console.log("")




// الجديد obj او كنموذج لل prototype يخدم ك obj يما تخليه خاوي وتعمرو من بعد اولا دير فيه method هاد ال
// يمكن ليك تخليه خاوي وتعمرو من بعد بالخصائص لي بغيتي
let secondObj = Object.create(obj);
console.log(secondObj)
// prototype فاش عتمشي لل كونسول غتقاه خاوي وملي غتحلو غتلقا فيه
// القديم لي درتيه كنموذج باش تقاد هاد الجديد object مرتبط بال object يعني هاد ال

// age القيمة ديال ال obj مثلا جيتي بغيتي تبدل فهاد ال
secondObj.theAge = 40;
// المفروض انه غيرد ليك العمر و غيضربو ف 2 وفهاد الحالة غيكون 80
// لول obj ولكن لا غيبدل القيمة ديال العمر ولكن مغيضربش القيمة جديد للعمر و انما غيبقا خدام بالقيمة لي كانت فال
// علاش؟
// user age اي واخا تبدل العمر. الفنكشن غتبقا خدامة بال user obj يعني العمر ل فال user.age حيت ديك الفنكشن فيها
// الحالي owner obj عند الفنكشن دير القيمة ديال العمر كتعود على ال user obj الحل و هو انك فال
// method لي كيستدعي ال obj كيعود على ال this حيت

console.log(secondObj.theName)
console.log(secondObj.theAge)
console.log(secondObj.ageDouble())