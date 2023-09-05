/* ============================================================
    Object-Oriented Programming [OOP]

        Constructor Function Introduction

=============================================================== */

// مثلا دبا عندك مبنى خاصك تبنيه. كدير ليه مخطط وكتبني بناء على داك المخطط باش لمشيتي لشي بناية اخرا يكون عندك المخطط القديم تبني عليه
// هدا هو الوراثة يعني تقد تخدم بداك المخطط فبلاصة اخرا
// OOP وهدا هو عالم ال




/* ================= an example */

// objects مثلا عندك هاد ال
let userOne = {
    id: 100,
    userName: "mohamed",
    salary: 5000,
};

let userTwo = {
    id: 101,
    userName: "simo",
    salary: 6000,
};

let userThree = {
    id: 102,
    userName: "ziko",
    salary: 7000,
};

// فحالة بغيتي تزيد مثلا الخلاص الشهري لكل واحد خاصك تبقا تزيد لواحد بواحد. وقيس على ذلك اي عملية غديرها من بعد
// objects هنا فين كيدخل اهمية المخطط اي انك يكون عند مخطط واحد قاديتي منو هاد ال
// باش من بعد تبدل غا فلمخطط الاصلي وغيتبدل فكولشي




/* =========== Constructor Function Old Syntax ========== */

// وصاف best practice غار upperCase نفس الفنكشن العادية غار اول حرف من الكلمة كيكون
// instansheet كتسما constructor function من ال objects العملية ديال انشاء ال
// constructor function من ال instance اي

function Users(id, username, salary) {
    // constructor function لي غتقادو من هاد ال obj كتعود على ال this
    this.i = id;
    this.u = username;
    // لي خارجين منها obj وغطبق فغاع ال constructor function ديرها غا فل operation ودبا مثلا لبغيتي دير شي
    this.s = salary < 1000 ? salary + 1000 : salary + 500;
};

let user1 = new Users(200, "ahmed", 500);
let user2 = new Users(201, "said", 1000);
let user3 = new Users(202, "aymane", 2000);

console.log(user1.i, user1.u, user1.s);
console.log(user2.i, user2.u, user2.s);
console.log(user3.i, user3.u, user3.s);