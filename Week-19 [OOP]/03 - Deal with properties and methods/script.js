/* ============================================================
    Object-Oriented Programming [OOP]

        Deal with properties and methods
=============================================================== */

class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username || "unknown"; // if username is empty
        this.s = salary;

        // Property
        this.msg = () => {
            return `hello ${this.u}`
        };
    }

    // Method
    writeMsg() {
        return `hello ${this.u}`
    }
}

let user1 = new User(200, "ahmed", 500);
let user2 = new User(201, "said", 1000);

console.log(user1.i, user1.u, user1.s);
console.log(user2.i, user2.u, user2.s);

// Property
console.log(user1.msg()); // will give native code if () is missed
console.log(user2.msg());

// Method
console.log(user1.writeMsg())
console.log(user2.writeMsg())