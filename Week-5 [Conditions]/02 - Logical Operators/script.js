/*
Logical Operators
    -  !   (Not)
    -  &&  (And)
    -  ||  (Or)
*/


// Also return "true, false"



/* ===================  !  ===================  */

// و العكس false لل true كينفي اي كيرجع
console.log(!false)
console.log(!true)
console.log(!(10 == "10")); // This condition is true but with "!" it will be false

console.log("")




/* ===================  &&  ===================  */

// و

// true باش يطلع لك true يعني كطلب منو انه خاص غا الشروط لي حطيتي ليه يكونو
console.log(10 == "10" && 10 > 8 && 10 >= 10); // true


// false فحالة كان شرط واحد غلط غيرجع ليك
console.log(10 == "10" && 10 > 20 && 10 >= 10); // true

console.log("");




/* ===================  ||  ===================  */

// او 

// true يعني كيكفي يكون شرط واحد صحيح من دوك الشروط لي عطيتي ليه باش يرجع ليك
console.log(3 > 4 || 4 == 2 || 10 >= 10)

// false اما فحالة كانو كاملين غلط فراه منطقي يرجع ليك