/* ============================================================
    Object-Oriented Programming [OOP]

        Class Static properties & methods
=============================================================== */


// object هي خواص تخص الكلاس نفسو, معندهاش علاقة بال static properties ال


class User {
    count = 0;
    // Static Property
    static count2 = 0;
    constructor(id, username, salary) {
        this.i = id;
        this.u = username || "unknown"; // if username is empty
        this.s = salary;
        User.count2++
    }

    // Static Methods
    static sayHi() {
        return "Hello from class"
    }
    static countMembers() {
        return `${this.count2} members created`
    }
}

let user1 = new User(100, "mahmoud", 4000);
let user2 = new User(100, "mahmoud", 4000);
let user3 = new User(100, "mahmoud", 4000);
let user4 = new User(100, "mahmoud", 4000);
let user5 = new User(100, "mahmoud", 4000);
let user6 = new User(100, "mahmoud", 4000);
let user7 = new User(100, "mahmoud", 4000);
let user8 = new User(100, "mahmoud", 4000);

console.log(user1.i, user1.u, user1.s);


// وصل ليها اما الكلاس موصلش ليها obj هادي ال
console.log(user1.count); // 0
console.log(User.count); // Undefined

// static keyword باش تعرف بلي هاد الخواص ديال الكلاس كضيف قبلهم
console.log(User.count2);


console.log(User.sayHi());
console.log(User.countMembers());