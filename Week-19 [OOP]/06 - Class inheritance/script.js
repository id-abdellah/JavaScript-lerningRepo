/* ============================================================
    Object-Oriented Programming [OOP]

        Class inheritance
=============================================================== */

// اخر class لشي class هو توريث خواص من


// Parent class
class User {
    constructor(id, username) {
        this.i = id;
        this.u = username;
    }
    sayHi() {
        return `hello ${this.u}`
    }
}

let userOne = new User(100, "plainUser");
console.log(userOne.i, userOne.u, userOne.sayHi())




// Derived Class
class Admin extends User {
    constructor(id, username, permissions) {
        // فالكلاس الاب غتبان فيه parameter اي super ال
        super(id, username);

        this.p = permissions;
    }
    // methods فالوراثة كياخد الخواص و
}

let adminUser = new Admin(200, "adminUser", true);
console.log(adminUser.i, adminUser.u, adminUser.sayHi(), adminUser.p)



// Derived Class from Admin
class SuperAdmin extends Admin {
    constructor(id, username, permissions, email) {
        super(id, username, permissions)

        this.e = email;
    }
}