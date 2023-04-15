/* ======================================================
    - Nested Objects & Trainings
========================================================= */



let mainObj = {
    theName: "mohamed",
    theAge: 20,
    skills: ["html", "css", "js", "bootstrap", "nodejs"],
    available: true,

    // Nested Obj

    adresses: {
        ksa: "Mekkah",
        morocco: {
            firstAd: "Merrakech",
            secondAd: "Laayoune",
        },
    },

    checkAvaibility: function () {
        // object خاصك تحدد ليها بلي بغيتي تقلب فالسكوب ديال ال mainobj.avai بالنسبة لل
        // global scope حيت الا مدرتيهاش غتمشي الفنكشن تقلب فال
        if (mainObj.available === true) {
            return `Yes, available for work`
        } else {
            return `No, not available for work`
        }
    }
};


console.log(`
Name: ${mainObj.theName}

Age: ${mainObj.theAge}

Skills: ${mainObj.skills.join(" | ")}

Status: ${mainObj.checkAvaibility()}

Adresses (KSA): ${mainObj.adresses.ksa}

Adresses (Morocco) First: ${mainObj.adresses.morocco.firstAd}

Adresses (Morocco) Second: ${mainObj.adresses.morocco.secondAd}

`)

console.log(`
quike test for "Bracket Notation"

${mainObj["adresses"]["morocco"]["firstAd"]}

${mainObj["adresses"].morocco["secondAd"]}

`)