/* ============================================================
    Object-Oriented Programming [OOP]

        Constructor Function New Syntax

=============================================================== */

// in ES6 we use "class" syntax for the constructor function
// js function اولا وقبل كل شي حنا كنتعاملو مع

class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary;
    }
}

let user1 = new User(200, "ahmed", 500);
let user2 = new User(201, "said", 1000);
let user3 = new User(202, "aymane", 2000);

console.log(user1.i, user1.u, user1.s);
console.log(user2.i, user2.u, user2.s);
console.log(user3.i, user3.u, user3.s);


/* ------------- */

// instance from class راهم objects هاد ال

console.log(user1 instanceof User); // true
console.log(user1.constructor == User); // true

// منين جاي obj بزاف وغادي تضطر انك دير فحص باش تعرف ال classes حيت من بعد غيكون عندك