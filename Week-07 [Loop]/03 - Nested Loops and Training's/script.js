/* =======================================================
    Loop
        - Nested Loops
========================================================== */


let products = ["Keyboard", "Mouse", "Screen", "Pen", "Pad", "Monitor", "Phone"];
let colors = ["Red", "Green", "Yellow", "blue"];
let models = [2020, 2021, 2022, 2023];


// التكرار الاصلي كيشد كل عنصر فالمصفوفة وكيطبق عليها التكرارت الفرعية

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(20))

    console.log(`## ${products[i]}`)

    console.log("#".repeat(20))
    console.log("colors:")

    for (let c = 0; c < colors.length; c++) {
        console.log(`- ${colors[c]}`)
    }

    console.log("Models:")

    for (let m = 0; m < models.length; m++) {
        console.log(`* ${models[m]}`)
    }

    console.log("")
}

/*
    ####################
    ## Keyboard
    ####################
    colors:
    - Red
    - Green
    - Yellow
    - blue
    Models:
    - 2020
    - 2021
    - 2022
    - 2023
*/