/*
    Arrays Methods [Slicing]

        - concat(array, array)

        - join(Separator)

*/



let arrayOne = ["a", "b", "c", "d"];
let arrayTwo = [1, 2, 3, 4, 5, 6];
let arrayThree = ["mohamed", "ahmed", "khalid"];



/* concat(array, array) */


let allArrays = arrayOne.concat(arrayTwo, arrayThree, "extra"); // ويمكن لك ضيف تا من عندك مصفوفة او سترينغ ..
console.log(allArrays);


console.log("")




/* Join() */

// الوظيفة ديالها انها كتشد غاع عناصر المصفوفة وكتجمعهم فسترينغ ومن خلالها كضيف الفاصل لي بغيتي بيناتهم

let familyMembers = ["mohamed", "brahim", "mina", "aicha"];
console.log(familyMembers);
console.log(familyMembers.join());  // فاش مكديرش الفاصل كيدير فاصلة بين العناصر 
console.log(familyMembers.join(""))
console.log(familyMembers.join(" "))
console.log(familyMembers.join(" | "))