let admins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let employees = ["Amgad", "Samah", "Omtiti", "Ameer", "Omar", "Othman", "Amany", "Samia", "Amiri"];

let showCount = 4;

let counter = 0;

document.write(`<div>We have ${showCount} Admins</div>`)

mainLoop: for (let i = 0; i < showCount; i++) {
    if (admins[i] === "Stop") {
        break;
    }
    document.write(`<hr>`)
    document.write(`<div>`)
    document.write(`"The admine for team ${i + 1} is ${admins[i]}"`)
    document.write(`<h3>Team Members:</h3>`)
    nestedLoop: for (let e = 0; e < employees.length; e++) {
        if (employees[e].startsWith(admins[i].charAt(0)) === true) {
            document.write(`<p>- ${employees[e]}</p>`)
        }
    }
    document.write(`</div>`)
}