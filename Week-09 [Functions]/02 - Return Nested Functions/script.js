/* ===============================================================
    Function inside a function
================================================================== */

/**
 * ? امثلة تطبيقة للفهم
 */


function showMessage(firstName, lastName) {
    let mainMessage = `Hi!`;
    // Nested function
    function concatMsg() {
        return `${mainMessage} ${firstName} ${lastName}`
    }
    return concatMsg();
}
console.log(showMessage("Mohamed", "id-abdellah"))



console.log("")



function showMessage2(firstName, lastName) {
    let mainMessage = `Hi!`;
    // Nested function

    function concatMsg() { // هادي كترجع الفنكشن لي فيها سمية كاملة معاها الميساج الولاني

        function fullName() { // هادي كترجع الاسم كامل مجموع
            return `${firstName} ${lastName}`
        }

        return `${mainMessage} ${fullName()}`

    }

    return concatMsg(); // اما الفنكشن الاصلية كترجع داكشي لي فجوج الفنكشن لي فلداخل مجموع
}

console.log(showMessage2("Ahmed", "Mohamed"))



/**
 * معقد فتقدر تقسمو على وظائف فالداخل ديالها task الغرض منها فاش كتكون عند فانكشن كدير
 */