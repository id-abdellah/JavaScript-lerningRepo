/* ======================================================
    "new" keyword
========================================================= */


// خاوي object من الممكن تقاد
// شي خاصية لكان اوريدي كاينة update و عاد تبقا ضيف فالخصائص ليه من بعد. ويمكن تا ت
let anObj = {};
console.log(anObj)

anObj.firstInfo = "something";
anObj.secondInfo = 200;
anObj.thirdInfo = true;

console.log(`
${anObj.firstInfo}
${anObj.secondInfo}
${anObj.thirdInfo}
`)



/*
    ? creat obj using "new" keyword
*/


// وتعمرو من بعد كيما درنا لفوق new يمكن ليك تقادو ب
// و تعمرو نيشان new اولا تقادو ب
let obj = new Object({
    frst: "str",
    second: 200,
    third: [1, 2, 3, 4, 5]
});

console.log(`
${obj.frst}
${obj.second}
${obj.third.join(" | ")}
`)