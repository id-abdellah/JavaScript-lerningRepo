/* ============================================================
    Date And Time

        Introduction
=============================================================== */

// نظام الوقت بدا من سنة 1970

let currentDate = new Date();

console.log(currentDate);
// Wed Aug 09 2023 20:59:59 GMT+0100 (غرينتش+01:00)


/* 
    Static methods
*/

console.log(Date.now()); // returns the time since 1970 in Milliseconds

let seconds = Date.now() / 1000; // number of seconds
let minutes = seconds / 60; // number of minutes
let hours = minutes / 60; // number of hours
let days = hours / 24; // number of days
let years = days / 364; // number of years

console.log(
    Math.floor(seconds),
    Math.floor(minutes),
    Math.floor(hours),
    Math.floor(days),
    Math.floor(years));