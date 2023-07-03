/* ============================================================
    
    WeakMap


      "WeakMap Allows Garbage Collector To Do Its Task But Not Map."

        --
            WeakMap => Key Can Be Object Only
            Map     => Key Can Be Anything
        --

=============================================================== */

let myWMapObj = { theName: "mohamed", age: 20 }

// let map = new Map();

// map.set(myWMapObj, "obj value")

// myWMapObj = null

// console.log(map)


//

let wMap = new WeakMap();

wMap.set(myWMapObj, "obj value");

myWMapObj = null;

console.log(wMap);



// map ومكيتحيدش من weakmap فراه كيتحيد من obj لشي references فاش كتحيد ال