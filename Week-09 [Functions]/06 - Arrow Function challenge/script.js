let names = function (...data) {
    return data;
};

// let names = (...data) => data;   //Arrow function

let persons = names('Mohamed', 'Ahmed', 'Hamoody', 'Abdo', 'Amina');

document.write(`<div> string [ ${persons.join(' ], [ ')} ] => done </div>`);

console.log(`String [ ${persons.join(' ], [ ')} ]`);

/**
 * secondChallenge
 */

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...numbers) => {
    return -one - two + numbers[0] + numbers[1];
};

console.log(calc(10, 20, 50, 60)); // 80
