/* ============================================================
    Regular Expressions

        Syntax: 
                /pattern/modifier(s);
                new RegExp("pattern", "modifier(s)");

        Modifiers => flags:
            i => case-insensitive
            g => global
            m => Multilines
        
        Search Methods
            match(pattern)

            Match():
                - Match a string againt a regular expression pattern
                - returns an array with matches
                - returns null if no matche is found
=============================================================== */


let mainString = "Hello Elzero web school i love elzero"

// فمتغير regex يمكن ليك دير ال
let regex = /Elzero/;
// اولا تكتبو نيشان فلبلاصة لي بغيتي
console.log(mainString.match(/Elzero/));
//['Elzero', index: 6, input: 'Hello Elzero web school i love elzero', groups: undefined] 

console.log(mainString.match(/elzero/));
// ['elzero', index: 31, input: 'Hello Elzero web school i love elzero', groups: undefined]





console.log("")


/* ====================== Modifiers ====================== */

// كتعدل طريقة البحث Modifiers ال


// Case insensitive (i)

// i لولة وخا درتي Elzero فهادو غيرد ليك غا
// globale modifier حيت كيمشي بالترتيب ورد ليك اول وحدة تقابلو ومكملش, باش اكمل خاصك دير
console.log(mainString.match(/Elzero/i)); // Elzero
console.log(mainString.match(/elzero/i)); // Elzero




// Globale modifier (g)

console.log(mainString.match(/elzero/ig)); // ['Elzero', 'elzero']



// Multilines (m)
// مزال مشرحهم تالمنبعد