/**
 * ************** Assignment One
 */

let member = Object({
    name: 'Elzero',
    age: 38,
    country: 'Egypt',
    fullDetails: function () {
        return `My Name is ${this.name}, My age is ${this.age}, I live in ${this.country}`;
    },
});

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt

console.log('');

/**
 * ************** Assignment Two
 */

let objectOne = { property: 'method one' };
console.log(objectOne.property);

let objectTwo = Object({ property: 'method two' });
console.log(objectTwo.property);

let objectThree = Object.create({});
objectThree.property = 'method three';
console.log(objectThree);

let objectFour = Object.assign({ property: 'method Four' });
console.log(objectFour.property);

console.log('');

/**
 * ************** Assignment Three
 */

let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

let finalObject = Object.assign({}, { a: a }, threeNums, twoNums);

console.log(finalObject);

console.log('');

/**
 * ************** Assignment Five
 */
let myFavGames = {
    'Trinity Universe': {
        publisher: 'NIS America',
        price: 40,
    },
    'Titan Quest': {
        publisher: 'THQ',
        bestThree: {
            one: 'Immortal Throne',
            two: 'Ragnarök',
            three: 'Atlantis',
        },
        price: 50,
    },
    YS: {
        publisher: 'Falcom',
        bestThree: {
            one: 'Oath in Felghana',
            two: 'Ark Of Napishtim',
            three: 'origin',
        },
        price: 40,
    },
};

for (keys in myFavGames) {
    console.log(`The game name is: ${keys}`);
    console.log(`The publisher is: ${myFavGames[keys].publisher}`);
    console.log(`The price is: ${myFavGames[keys].price}`);
    //
    if ('bestThree' in myFavGames[keys]) {
        console.log('- Game Has Releases');
        console.log(`First => ${myFavGames[keys].bestThree.one}`);
        console.log(`Second => ${myFavGames[keys].bestThree.two}`);
        console.log(`Third => ${myFavGames[keys].bestThree.three}`);
    }
    console.log('#'.repeat(20));
}
