/* =============================================================
    Destructuring

        Destructuring Function Parameters
================================================================ */


const userInformations = {
    theName: "Mohamed",
    theAge: 20,
    skills: {
        javaScript: 90,
        css: 100,
    }
}


function showInfo({ theName: n, theAge: a, skills: { javaScript: js, css: c }, somthingNew: sm = "newOne" } = userInformations) {
    console.log(`
        your name is: ${n}
        your age is: ${a}
        your javaScript skill progress is: ${js}
        your css skill progress is: ${c}

        an additional prop: ${sm}
    `)
}


showInfo()

/*
        your name is: Mohamed
        your age is: 20
        your javaScript skill progress is: 90
        your css skill progress is: 100

        an additional prop: newOne
*/