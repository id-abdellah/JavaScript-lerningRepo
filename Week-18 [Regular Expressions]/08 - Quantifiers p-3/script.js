/* ============================================================
    Regular Expressions

            Quantifiers :

                $   => End with something
                ^   => Start with something
                ?=  => Followed by something
                ?!  => Not followed by something

=============================================================== */

let aString = "we love programming";
let names = "1osamaZ 2ahmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// كتعني واش كيبدا ب ديجيت اولا سترينغ الخ $
console.log(/ing$/ig.test(aString)); // true
console.log(/lz$/g.test(names)); // false

console.log(/^\w{2}/ig.test(aString)); // true




console.log("")

// يعني باترن يكون كيبدا ب ديجيت و خمسة دلوورد كراكتر و كيكمل ب شي كراكتر
let fName = /\d\w{5}(?=Z)/ig;
console.log(names.match(fName)); // ['1osama', 2ahmed, '5Gamal']


let sName = /\d\w{8}(?!Z)/ig;
console.log(names.match(sName)); // ['3Mohammed']

