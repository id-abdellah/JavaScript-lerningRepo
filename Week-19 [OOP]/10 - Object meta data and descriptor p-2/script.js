/* ============================================================
    Object-Oriented Programming [OOP]

            Object meta data and descriptor 

                - define multiple properties
                - check descriptors
=============================================================== */


let myObj = {
    a: 1,
    b: 2
};


Object.defineProperties(myObj, {
    c: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 3
    },
    d: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 4
    },
    e: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 5
    },
    f: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 6
    }
})

console.log(myObj);


// check descriptors

console.log(Object.getOwnPropertyDescriptor(myObj, "c"));
// {value: 3, writable: true, enumerable: true, configurable: true}

console.log(Object.getOwnPropertyDescriptors(myObj));
/*
 {
    a: {value: 1, writable: true, enumerable: true, configurable: true}
    b: {value: 2, writable: true, enumerable: true, configurable: true}
    c: {value: 3, writable: true, enumerable: true, configurable: true}
    d: {value: 4, writable: true, enumerable: true, configurable: true}
    e: {value: 5, writable: true, enumerable: true, configurable: true}
    f: {value: 6, writable: true, enumerable: true, configurable: true}
 }
*/