/*
    Arithmetic Operators:
        + Addition
        - Substraction 
        * Multiplication 
        / Division 
        ** Exponentiation  (ES/)
        % Mudulus  (Devision Remainder)
        ++ Increment  (post - pre) 
        -- Decrement   (post - pre)
*/


// Addition
console.log(10 + 40);

console.log(100 + "Dog");  // in this case the + operator will work as "concatenation"


/* ====================Substraction=============================== */


console.log(100 -60);

console.log(100 - "Dog"); // but in this case of (-) u can't substract a string from a number. The output is "NaN" [ Not a Nubmer ]
console.log(typeof NaN); // and the type of "NaN" is number



/* ====================multiplication=============================== */


console.log(20 * 10);
console.log(20 * -15);



/* ====================Division=============================== */


console.log(20 / 2);
console.log(21 / 2);



/* ====================Exponentiation=============================== */


console.log(2 ** 2, 2 ** 4)


/* ====================Division remainder=============================== */

console.log(11 % 2, 10 % 2)
// remove 1

console.log("-------------------------------------")


/* ====================Increment=============================== */

// [ Post ] Increment
// his concept is that he is "print" the number then increase it.
let num = 2;
console.log(num++)
console.log(num)   // as u see u must retype console.log of the number to increase it



// [ Pre ] Increment
// in this case of "pre", he is increase the number then print it
let x = 10;
console.log(++x)

// The same concept apply on "Decrement"