/* =============================================================
    Set data type

        
        Syntax: new set(Iterable)

        - Properties:
            - size
        
        - Methods:
            - add
            - delete
            - clear
            - has

================================================================ */



let myData = [1, 1, 1, 2, 3]

let myUniqueData = new Set(myData);

console.log(myData); // [1, 1, 1, 2, 3]
console.log(myUniqueData) // [1, 2, 3]

// ولكن للقات شي عناصر معاودين كتحيدهم وكتخلي غا واحد array بحال iterable كتعطيها set دبا ال

// index لشي عنصر بال access ت set ميمكنش ليك فال
console.log(myUniqueData[0]); // undefined




console.log("")



/* ============== properties: size ============== */

// x.size باش تجيب طول كتخدم بال set فال
console.log(myUniqueData.size);





/* ============== Methods: add ============== */

let newUniqueOne = new Set().add(1).add(1).add(2);
newUniqueOne.add(200).add(300).add("hello");

console.log(newUniqueOne); // set(5) {1, 2, 200, 300, "hello"}




console.log("")




/* ============== Methods: delete ============== */

let secondeUnique = new Set([1, 2, 3, 4, 5, 6]);

// فاش كديرها فسطر كتقوم بالحذف ديال العنصر لي كتعطيه ليها delete() بالنسبة لل
secondeUnique.delete(4);

console.log(secondeUnique);

// الا مكانش كاين false الا كان العنصر موجود و true اما فاش كديرها فكونسول كترد
// و كتمحيه
console.log(secondeUnique.delete(1))
console.log(secondeUnique);




console.log("")




/* ============== Methods: clear ============== */

// set هادي باينة كتمسح كاع محتوى ال

let thirdUnique = new Set([22, 22, 33, 1, 5]);
thirdUnique.clear();
console.log(thirdUnique);




console.log("")




/* ============== Methods: has ============== */

// على حسب واش كاين العنصر لي عطيتيه ليها اولا لا boolean تاهي باينة كترد
let fourthUnique = new Set(["A", "b"])

console.log(fourthUnique.has("b"))