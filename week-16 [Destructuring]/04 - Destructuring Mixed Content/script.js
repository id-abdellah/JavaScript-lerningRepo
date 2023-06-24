/* =============================================================
    Destructuring

        Destructuring Mixed Content
================================================================ */


let user = {
    theName: "mohamed",
    theAge: 20,
    skills: ["html", "css", "javascript", "bootstrap", "tailwindCss", "git & github"],
    address: {
        morocco: "casaBlanka",
        spain: "madrind",
    },
};


let { theName: n, theAge: a, skills: [h, c, j, , , g, f = "not found"], address: { morocco: m } } = user

console.log(`your name is: ${n}`)
console.log(`your age is: ${a}`)
console.log(`your skills are: ${h}, ${c}, ${j}, ${g}, ${f}`)
console.log(`your address is: ${m}`)