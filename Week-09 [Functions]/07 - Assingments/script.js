/**
 * Assignment One
 */

function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        if (typeof zName === 'string') {
            newName = zName.split(' ');
            return `${newName[0]} ${newName[1].slice(0, 1).toUpperCase()}.`;
        }
    }

    function ageWithMessage(zAge) {
        zAge = parseInt(zAge);
        return `Your age is ${zAge}`;
    }

    function countryTwoLetters(zCountry) {
        if (typeof zCountry === 'string') {
            return `You liv in ${zCountry.slice(0, 2).toUpperCase()}`;
        } else {
            return `Must be a string`;
        }
    }

    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(
            zAge
        )}, ${countryTwoLetters(zCountry)}`;
    }

    return fullDetails();
}

console.log(getDetails('mohamed idAbdellah', '20 is my age', 'egypte'));
console.log(getDetails('Hamoody ali', '80 is my age', 'syria'));

console.log(`
  
  `);

/**
 * Assignment Two
 */

let itsMe = (_) => `i am a normal Function`;
console.log(itsMe());

let urlCreat = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreat('https', 'Obito', 'an'));

console.log(`
  
  `);

/**
 * Assignment Three
 */

let checker = (zName) => {
    return (status) => {
        return (salary) => {
            return status === 'Available'
                ? `${zName}, my salary is ${salary}`
                : 'Not available';
        };
    };
};

console.log(checker('Hamoody')('Available')(2000));
console.log(checker('Hamoody')()(2000));

console.log(`
  
  `);

/**
 * Assignment Four
 */

function specialMix(...data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        let num = parseInt(data[i]);
        if (isNaN(num)) {
            num = 0;
        }
        result += num;
    }
    return result === 0 ? `All is strings` : result;
}

console.log(specialMix(20, 20, 20)); // 60
console.log(specialMix('20Test', 'cool', '40Test'));
console.log(specialMix('Test', 'cool', 'Test'));
