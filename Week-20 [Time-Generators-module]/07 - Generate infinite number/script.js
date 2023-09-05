/* ============================================================
    Generator Function

            - Generate Infinite Numbers
            - Use Return inside generators
=============================================================== */

// generate فلداخل ديال الفنكشن فراه كدير نفس الحاجة وهي انها كتوقف ال return بالنسبة ل استخدام

function* generateInfiniteNumber() {
    let index = 0;
    while (true) {
        yield index++
    }
}

let generator = generateInfiniteNumber();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); // 20