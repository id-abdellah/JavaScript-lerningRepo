/* ===================================================
  Challenge 1
====================================================== */

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    [++a] [+] [+b++] [+c++] [-] [+a++]

    [++a]
        - Value: 11
        - Explain: pre Increment

    [+]
        - Explain: add operator

    [+b++]
        - value: 21
        - Explain: (+b) unary plus to convert "b" from string to nubmer, (b++) post increment

    [+c++]
        - Value: 81
        - Explain: (+c) unary plus won't affect, (c++) post increment

    [-]
        - Explain: Substracte operator

    [+a++]
        - Value: 11
        - Explain: (+a) unary plus won't affect, (a++) post increment
*/

/*
    console.log(++a + -b + +c++ - -a++ + +a);

    [++a] [+] [-b] [+c++] [-] [-a++] [+a]

    [++a]
        - Value: 11
        - Explain: pre Increment

    [+]
        - Explain: add operator

    [-b]
        - value: -20
        - Explain: (-b) unary Negation to convert "b" from string to negation nubmer

    [+c++]
        - Value: 81
        - Explain: (+c) unary plus won't affect, (c++) post increment

    [-]
        - Explain: Substracte operator

    [-a++]
        - Value: -11
        - Explain: (-a) unary Negation, (a++) post increment
*/

/*
    console.log(--c + +b + --a * +b++ - +b * a + --a - +true)

    [--c] [+] [+b] [--a] [*] [+b++] [+b] [a] [--a] [+true]

    [--c]
        - Value: 79 
        - Explain: pre Decrement

    [+]
        - Explain: add operator 

    [+b]
        - value: 20
        - Explain: unary plus to convert from string to number

    [--a]
        - Value: 9
        - Explain: pre decrement 

    [*]
        - Explain: Multiplication operator

    [+b++]
        - Value: 21
        - Explain: unary plus, post increment

    [a]
        - Value: 10
        - Explain: Variable

    [+true]
        - Value: 1
        - Explain: boolean data, unary plus won't affect
*/

console.log("");
/* ===================================================
  Challenge 2
====================================================== */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log((-d * +e) - (f * 60) - (true * 27)); // 173