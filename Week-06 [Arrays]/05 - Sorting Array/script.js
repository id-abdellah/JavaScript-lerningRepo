/*

    Array Methods 
        
        - sort()
        - reverse()

*/


let ArrayOne = [10, 2, "10", "90", -20, -10, 1000, 100, "mohamed", "ahmed"];
console.log(ArrayOne);


console.log("")



/* ================== sort() ================== */

// كترتب المصفوفة
// و لكن ماشي ترتيب من لكبير للصغير
// alphabetical هي كترتب على حساب
// يعني حتى الارقام ماشي شكون لي كبر اولا شكون صغير. و انما الرقم لي كيبدا بيه
console.log(ArrayOne.sort())


console.log("")



/* ================== reverse() ================== */

// كتقلب المصفوفة
console.log(ArrayOne.reverse())


console.log("")


// Tip
// u can use chain here
console.log(ArrayOne.sort().reverse())