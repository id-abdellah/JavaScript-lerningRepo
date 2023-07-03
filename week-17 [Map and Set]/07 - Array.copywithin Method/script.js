/* ============================================================

    Array Methods

      Array.copyWithin( Target, Start [opt], End [opt] )

      => copy part of an array to another location of the same array
      => any negative value will start from the end

        target:
          - index to copy part to
        start:
          - index to start copying from
          - if omitted = start from index 0
        end:
          - index to copying from
          - Not including the end
          - if omitted reach the end
=============================================================== */

// بختصار, كتخليك تاخذ عناصر من المصفوفة وتنسخهم فبلاصة اخرة فنفس المصفوفة
// لي غتنسخ ليها, العناصر لي كانو فيها غيمشيو target مع العلم ان البلاصة او


let myFirstArray = [1, 2, 3, 4, 5, 6, 7, "A", "B", "C"]

myFirstArray.copyWithin(2, -3);

console.log(myFirstArray); // [1, 2, 'A', 'B', 'C', 6, 7, 'A', 'B', 'C']




console.log("")



let mySecondArray = [1, 2, 3, 4, 5, 6, 7, "A", "B", "C"];

mySecondArray.copyWithin(3);

// يعني البلاصة فين غيحط المنسوخ. و معطيتوش منين غيبدا النسخ ولفين غيسالي target فهادي عطيتو غا ال
// target تالخر ديال المصفوفة. وغيحطو ف ابتداء من ال 0 داكشي علاش غيبدا النسخ من
console.log(mySecondArray); // [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]




console.log("")




let myThirdArray = [1, 2, 3, 4, 5, 6, 7, "A", "B", "C"];

myThirdArray.copyWithin(4, -3);

console.log(myThirdArray); // [1, 2, 3, 4, 'A', 'B', 'C', 'A', 'B', 'C']