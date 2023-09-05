/* ============================================================
    Regular Expressions

        Ranges Part-2:

                [a-z]
                [^a-z]
                [A-Z]
                [^A-Z]
                [abc]
                [^abc]
=============================================================== */

let mainString = "AaBbcdEfG1234!§%/&"


let aTozSmall = /[a-z]/g;
let notaTozSmall = /[^a-z]/g;
console.log(mainString.match(aTozSmall)); // ['a', 'b', 'c', 'd', 'f']
console.log(mainString.match(notaTozSmall));
// ['A', 'B', 'E', 'G', '1', '2', '3', '4', '!', '§', '%', '/', '&']




let aTozCapital = /[A-Z]/g;
let notaTozCapital = /[^A-Z]/g;
console.log(mainString.match(aTozCapital)); // ['A', 'B', 'E', 'G']
console.log(mainString.match(notaTozCapital));
// ['a', 'b', 'c', 'd', 'f', '1', '2', '3', '4', '!', '§', '%', '/', '&']




// يمكن ليك تدير اي احرف تقلب عليهم
let adc = /[adc]/g;
let notadc = /[^adc]/g;
console.log(mainString.match(adc)); // ['a', 'c', 'd']
console.log(mainString.match(notadc));
// ['A', 'B', 'b', 'E', 'f', 'G', '1', '2', '3', '4', '!', '§', '%', '/', '&']





let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
console.log(mainString.match(lettersCapsAndSmall));
// ['A', 'a', 'B', 'b', 'c', 'd', 'E', 'f', 'G']
console.log(mainString.match(numsAndSpecials));
// ['1', '2', '3', '4', '!', '§', '%', '/', '&']



let onlySpecials = /[^a-zA-Z0-9]/g;
console.log(mainString.match(onlySpecials)); // ['!', '§', '%', '/', '&']