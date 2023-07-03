/* ============================================================
    
    Map Data Type

        syntax: new Map(Iterable with key/value)

        Map vs Object

=============================================================== */


/*

    1)
        - Map    => Does not contain key by default
        - Object => Has default keys

    2)
        - Map    => Key can be anything [function, object, any primitive data types]
        - Object => String or Symbol

    3)
        - Map    => Ordered by insertion
        - Object => Not 100% till now

    4)
        - Map    => Get items by size
        - Object => Need to do manualy

    5)
        - Map    => Can directly iterated
        - Object => Not directly and need to use object.keys() and so on

    6)
        - Map    => Better performance when add and or remove data
        - Object => Low performance when compating to map 

*/





/*
    1)
*/

// باش يتقاد على عكس الماب prototype باش تقادو. هو كيستعمل object ال

let myMap = new Map();
let myObj = {};

console.log(myMap);
console.log(myObj);

// default keys like map مفيهش object باش تقاد
let myEmptyObj = Object.create(null);
console.log(myEmptyObj);




console.log("")




/*
    2)
*/


let myNewObj = {
    10: "number",
    "10": "string"
};

// مختالفة data type على اللولة وخا override لفوق غيطلع ليك غا 10 وحدة. حيت التانية دارت obj دبا فال
// keys كنوع بيانات فال string or symbol كيقبل غا object حيت ال
console.log(myNewObj);


// لا. كلا 10 كاينة بوحدها حيت وحدة رقم وتانية سترينغ Map بالنسبة لل
let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");

console.log(myNewMap);
console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));


console.log("##".repeat(10));


// data type as key ال ماب كيقبل اي

let myMixedMap = new Map();
myMixedMap.set(100, "Number");
myMixedMap.set("001", "String");
myMixedMap.set(true, "Boolean");
myMixedMap.set({ a: 1, b: 2 }, "Object");
myMixedMap.set(function doSomthing() { console.log("hi") }, "Function");

console.log(myMixedMap)




/*
    3)
*/

// ال ماب كترتب البيانات لي فيها على حسب الادخال لي كديرو
// لا obj اما ال



console.log("")



/*
    4)
*/

let mapSize = new Map();
mapSize.set("a", 100);
mapSize.set("b", 200);

// size property فال ماب تقد نيشان تجبد شحال عندك من خاصية فيه عن طريق ال
console.log(mapSize.size);


let myLength = {
    a: 100,
    b: 200,
};
// length وعاد دير شحال فيها فال keys لي كترد ليك مصفوفة فيه ال object.keys() خاص تدير obj ال
console.log(Object.keys(myLength).length)