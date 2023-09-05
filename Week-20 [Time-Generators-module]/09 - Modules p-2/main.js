/* ============================================================
    Modules

        - Export alias
        - named export
        - default export
        - import all
=============================================================== */

let a = "Mohamed ID-ABDELLAH";
let arr = [10, 20, 30, 40, 50];
let obj = {
    a: 100,
    b: 200,
};
function doSomething() {
    return `Iam from main.js`
}

export {
    a, arr, obj as myObject, doSomething
    // لشي خاصية من هنايا alias ال export تقد من دبا ت

    // هما هادو يعني عندهم سمياتهم named export ال
}

// شي خاصية بلا سمية وتقد تستدعيها باي سمية بغيتي export لي تقد ت default export او كاينة ال
// باي سمية import بشي سمية ولكن تقدر تدير ليها export اولا تقد ت

export default function () {
    return "Hello i an anounymous function"
}