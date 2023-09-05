/* ============================================================
    Object-Oriented Programming [OOP]

        Class Encapsulation

            - class field are public by default
            - guards the data against illegal access
            - helps to achieve the target without revealing its complex details.
            - will reduce humane errors
            - make the app more flexible and manageable
            - simplifies the app
=============================================================== */

// public غا خواص الكلاس فالوضع العادي مرئية للعموم اي
// اي محمية privet ونتا تقد تبغي شي خواص يكونو

// مثلا عندك باسوورد او رقم بطاقة مينفعش تجي وتعرضهم نيشان وانما تشفرهم عاد تعرضهم


class User {
    #e
    constructor(id, username, eSalary) {
        this.i = id;
        this.u = username;

        // فلول declare كضيف قبلها هاش تاغ و ضروري دير ليها privet property فال
        this.#e = eSalary;
        // عليها access وخا هكاك لمشيتي نيشان دبا متقدرش ت
    }

    // ديال الكلاس familly هما ال privet property لي يقدرو يشوفو ال
    getSalary() {
        return parseInt(this.#e)
    }
}

let userOne = new User(100, "Obito", "5000 mad");
console.log(userOne.i, userOne.u)

// privet prop من ضمن العائلة يعني تقد تشوف ال function هاد ال
// يعني كدير عليها عمليات قبل متعرضها مباشرة
console.log(userOne.getSalary())