/* ======================================================
    Object Introduction
========================================================= */

/**
 * لي كتنفذ تاسك معين methods لي كترد معلومات. و على properties كيحتاوي على object ال
*/


// * مثال للفهم


/**
 * methods عندها تاهي خصائص و عندها object دبا السيارة تاهي شيئ اي
 * من الخصائص ديالها اللون و النوع و الثمن و الطراز و سنة التصنيع وهادي كلها معلومات
 * او وظائف كتقوم بيهم السيارة tasks وهادو ... و من الوظائف: الوقوف السرعة الدوران
*/


// * Testing on window object

console.log(window.location.href)
/**
 * window => is an object, has properties and method
 * .location => is a nested object inside of "window" object
 * .href => is an property that return the url of current site (information)
 * 
 * * * if you type [ console.log(window.location.assign("https://google.com")) ]
 * .assing => is a method, that will sent you to google page (changes the url)
*/



// ? Syntax


let user = {
    // * properties

    /**
     *  Syntaxt
     *      propertyName: anyTypeOfData,
     * 
     * you have many properties? use comma separatore
     */
    theName: "Mohamed",
    lastName: "Id-abdellah",
    theAge: 20,
    isStudent: true,
    birthDay: "16 / 12 / 2002",
    hobbies: ["programming", "football", "walk"],

    // * Methods "actions"

    // in the method, set methodName and then assign it to function 
    sayHello: function () {
        return "This hello is from method"
    }
};


// ? Accessing to the object

console.log(user.theName)
console.log(user.lastName)
console.log(user.theAge)
console.log(user.isStudent)
console.log(user.birthDay)
console.log(user.hobbies)
console.log(user.sayHello())