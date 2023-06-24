/* =============================================================
    Destructuring

        Destructuring Objects
================================================================ */




/* ===================== Part 1 ===================== */

let user = {
    theName: "mohamed",
    theAge: 20,
    theTitel: "developer",
    theCountry: "morocco"
};

let { theName, theAge, theTitel, theCountry } = user;

console.log(theName)
console.log(theAge)
console.log(theTitel)
console.log(theCountry)

// فحالة كنتي باغي تفوت شي خاصية متخليش بلاصتها خاويا و انما مديرهاش غاع يعني دوز بحال الا مكتبتيها
// كتمشي بتسلسل arrays نتا كتعط للخاصية بسميتها ماشي بحال ال object حيت فال

// كامل ف قوسين باش يخدم update line وفحالة كنتي ديجيا مديكلاري بيهم خاصك دير ال



console.log("")








/* =============================================================
    Destructuring

        Destructuring Objects

            - Naming The Variables
            - Add new property
            - Nested Object
            - Destructuring the nested object only

================================================================ */



// و يمكن تا بعهم بالديفولت var باش تبدل سمية ال خاصية كدير جوج نقطة متبوعة بسمية ال objects بالنسبة لل

let schools = {
    est: "laayoune",
    fst: "fas",
    skills: {
        html: 70,
        css: 100,
    }
};

let { est: e = "default", fst: f, um6p: u = "mohamedIV", skills: { html: h, css: cs } } = schools

console.log(e)
console.log(f)
console.log(u)

console.log(`my html progress is: ${h}`);
console.log(`my css progress is: ${cs}`);

// destructuring nested obj only "skills" 

let { html: skillOne, css: skillTwo } = schools.skills

console.log(skillOne); // 70
console.log(skillTwo); // 100