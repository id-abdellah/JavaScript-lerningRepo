/* ============================================================
    
    Map Data Type

        Properties:
            - size
        
        Methods: 
            - set(key, value)
            - get(key)
            - delete
            - clear
            - has

=============================================================== */



/* ====================== set items directly in map ====================== */

let zeroMap = new Map([
    [true, "boolean"],
    ["Name", "Mohamed"],
    ["lastName", "id-abdellah"],
    ["age", 20]
]);

console.log(zeroMap.entries())





console.log("")

/* ====================== set() & get() ====================== */

let firstMap = new Map();

firstMap.set(true, "Boolean");
firstMap.set(100, "Number");
firstMap.set("Hi", "String");

console.log(firstMap.get(true));
console.log(firstMap.get("Hi"));





console.log("")

/* ====================== delete(Key) & clear() ====================== */

let secondMap = new Map([
    [1, "first"],
    [2, "second"]
]);

secondMap.set(3, "third")
secondMap.set(4, "fourth")
secondMap.set(5, "fifth")

console.log(secondMap)

secondMap.delete(3)

// true or fals فكونسول كيرجع ليك delete map فاش كدير

// seccesfuly deleted راه العنصر لي ختاريتي true الا كان
console.log(secondMap.delete(4))
// يعني راه متمحاش, فهاد الحالة 9 اصلا مكايناش false كان
console.log(secondMap.delete(9))

console.log(secondMap)

secondMap.clear()

console.log(secondMap)





console.log("")

/* ====================== has() ====================== */

let thirdMap = new Map();
thirdMap.set("Name", "mohamed");
thirdMap.set("age", 20);
thirdMap.set("Country", "Morocco");

console.log(thirdMap.has("age")); // true
console.log(thirdMap.has("gender")); // false