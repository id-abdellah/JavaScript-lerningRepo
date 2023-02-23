/* ==========================
    Concatenation
============================= */


let a = "we love";
let b = "Javasctipt";
let c = " "

console.log(a + b)


// to add space u can add new var with value of [ "" ] or add this value directely on console.

console.log (a, b) // this the first solution
console.log (a + " " + b) // this is the second, u can usit on ducoment.write too.

// all of these above are legacy code or ancient code


console.log("---------------------------------------")



/* ==========================
    Template Literal
============================= */

let x = "we love"
let y = "JavaScript"
let z = "and"
let u = "Programming"


// the oldest way to link these variables 
console.log(x + " \"\" " + y + "\n" + z + " " + u)


// the new way ES6
// to add a variables or condition ..., use dollar sign and brackets ${}.
console.log(`${x} "" ${y}
${z} ${u}`)  // lineBreack without adding [ \n ], just hit enter. 




// use case of ``

let Titel = "This is card titel";
let disc = "a description of the card content";

let card = `
    <div class="card">
        <h2>${Titel}</h2>
        <p>${disc}</p>
    </div>
`;

document.write(card);