/* =============================================================
    DOM [ Cloning ]

        - cloneNode(deep)

================================================================ */

let myDiv = document.getElementById("my-div");

let myPCloned = document.getElementById("my-p").cloneNode(true);

myDiv.appendChild(myPCloned)

// ماشي الاصلية. غا نسخة من الاصلية وتقدر تحكم فيها و تحطها فينما بغيتي p دبا هاد ال

// deep Argument
// false او true كيقبل منك يا deep arg بالنسبة لل
// ديالو و لكن مكياخذش داكشي فالداخل ديالو attributes فراه كياخذ العنصر و false فحالة درتي
// فراه غياخذ كلشي العنصر مع السمات ديالو مع العناصر لي فلداخل ديالو كنسخة true اما فحالة درتي


// ولي ميمكنش يكونو جوج فصفحة name in input case اولا id ولكن مع انه كينسخ كولشي ف غينسخ تا
// برمجيا id attribute لحل وهو انك تبدل ال
myPCloned.id = "my-p-cloned"
// للعنصر الرئيسي و انما للنسخة id وفهادي راك مبدلتيش ال
console.log(myPCloned)