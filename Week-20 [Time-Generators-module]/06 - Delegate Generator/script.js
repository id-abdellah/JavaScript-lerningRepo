/* ============================================================
    Generator Function

            Delegate generator
=============================================================== */

// يعني مولد كينوب على مولد تاني

function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
}

function* generateLetters() {
    yield "a";
    yield "b";
    yield "c";
}


function* generateAll() {
    yield* generateNums();
    yield* generateLetters();
    yield* [10, 20, 30, 40, 50, 60];

    // خام fun فحالة مدرتيها غيرجع ليك function يعني غتولد كولشي لي فال yield فال * ال
    // تافلمصفوفة لمدرتيهاش غيرجع ليك المصفوفة مجموعة و مغيدارش ليها التوليد
}

let delegateGenerator = generateAll();

console.log(delegateGenerator.next()); // 1
console.log(delegateGenerator.next()); // 2
console.log(delegateGenerator.next()); // 3
console.log(delegateGenerator.next()); // a
console.log(delegateGenerator.next()); // b
console.log(delegateGenerator.next()); // c
console.log(delegateGenerator.next()); // 10
console.log(delegateGenerator.next()); // 20
// undefined نهائيا واي حاجة من بعدها generator كتوقف عملية ال return ال
console.log(delegateGenerator.return("stopped"));
console.log(delegateGenerator.next());
console.log(delegateGenerator.next());
console.log(delegateGenerator.next());
console.log(delegateGenerator.next()); 