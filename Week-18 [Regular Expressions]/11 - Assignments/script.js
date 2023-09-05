/* ============================================================
    Regular Expressions

            Assignments

=============================================================== */



/* First Assignment */

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRegex = /\d{4}:\w+\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;
console.log(ip.match(ipRegex));





/* Second Assignment */

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRegex = /os\w*o/ig;
console.log(specialNames.match(specialNamesRegex)); // ['Os10O', 'OsO', 'Os100O', 'Osa100O']





/* Third Assignment */

let phone = "+(995)-123 (4567)";
let phoneRegex = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(phoneRegex));





/* Fourth Assignment */


/* Fifth Assignment */

let date1 = "25/10/1982";
let date2 = "25-10-1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/|\s|-)\d{2}(\/|\s|-)(\d{4}|\d{2})/ig; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"