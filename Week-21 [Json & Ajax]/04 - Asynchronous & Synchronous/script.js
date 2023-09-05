/* ============================================================
    Asynchronous and Synchronous Programming

        Synchronous
            - Operations runs in sequence
            - Each operation must wait for the previous one to complet

        Asynchronous
            - Operations Runs in parallel
            - This means that an operation can occur while another one is still bein processed
=============================================================== */

// هو ان العملية الجديدة خاص تستنا فالعملية لي قبل منها تاتكمل عاد تبدا synchronous ال

// هي انه العمليات كتم المعالجة ديالهم بشكل موازي asynchronous اما ال
// مما يعني ان شي عملية يمكن ليها تخدم وخا كاينين عمليات اخرين كيخدمو معاها فنفس الوقت


/*
     sync مثال بسيط على ال
console.log("one")
console.log("two")
alert("hii") هادي مع ان غتاخد وقت ف كتوقف العمليات لي جايين من بعد تاتكمل هيا
console.log("three")

*/


// asyn

console.log("1")
console.log("2")
setTimeout(() => {
    console.log("3")
}, 0);
console.log("4")