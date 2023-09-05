/* ------------------------ First Assignment */

class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return `car is running now`
    }
    stop() {
        return `car is stopped`
    }
}


let carOne = new Car("Ferrari", "2018", 80_000);
let carTwo = new Car("Dacia", "2012", 50_000);
let carThree = new Car("Mercidese", "2020", 100_000);

console.log(`car one is ${carOne.n}, and model is ${carOne.m}, price is ${carOne.p}`)
console.log(carOne.run())


console.log("\n\n")





/* ------------------------ Second Assignment */

class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

class Tablet extends Phone {
    constructor(name, serial, price, size) {
        super(name, serial, price);
        this.size = size || "Unknown";
    }

    fullDetails() {
        return `${this.name} serial is ${this.serial} and size is ${this.size}`
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown


console.log("\n\n")





/* ------------------------ Third Assignment */


class User {
    #c
    constructor(username, card) {
        this.u = username;
        this.#c = card.toString();
    }

    get showData() {
        let creditCardRegex = /\d{4}-\d{4}-\d{4}-\d{4}/ig;
        let creditCard = [];

        if (creditCardRegex.test(this.#c)) {
            return `Hello ${this.u}, Your Credit card number is ${this.#c}`
        } else {
            for (let i = 0; i < this.#c.length; i++) {
                creditCard.push(this.#c[i])
                let fourMulty = [4, 8, 12];
                if (fourMulty.includes(i + 1)) {
                    creditCard.push("-");
                }
            }
        }
        return `Hello ${this.u}, Your Credit card number is ${creditCard.join("")}`
    }
}

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);


console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678



console.log("\n\n")



/* ------------------------ Fourth Assignment */

String.prototype.addLove = function () {
    return `I Love you ${this}`
}

let myName = "Mohamed";

console.log(myName.addLove());




console.log("\n\n")





/* ------------------------ Fifth Assignment */

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

Object.defineProperties(myObj, {
    score: {
        writable: false,
    },
    id: {
        enumerable: false,
    },
    country: {
        configurable: true,
    }
})

delete myObj.country

myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);