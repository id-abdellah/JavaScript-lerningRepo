/* ============================================================
    Object-Oriented Programming [OOP]

        Update Properties 
        Built in Constructors
=============================================================== */

/* ------------ Update Properties ------------ */

class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username || "unknown"; // if username is empty
        this.s = salary;
    }

    // Methods
    updateName(newName) {
        this.u = newName;
    }
    updateSalary(newSalary) {
        this.s = newSalary;
    }
}

let user1 = new User(100, "mahmoud", 4000);

console.log(user1.i, user1.u, user1.s);

user1.updateName("Obito");
user1.updateSalary(8500);

console.log(user1.i, user1.u, user1.s);




console.log("")



/* ------------ Built in Functions ------------ */

let strOne = "mohamed";
let strTwo = new String("mohamed");

console.log(typeof strOne); // string
console.log(typeof strTwo); // object


console.log(strOne instanceof String); // false
console.log(strTwo instanceof String); // true

console.log(strOne.constructor == String); // true
console.log(strTwo.constructor == String); // true