/**
 * ************ Assignment one ************
 */

function sayHello(theName, theGender = '') {
    document.write(`<div>`);
    if (theGender === 'Femal' || theGender === 'femal') {
        theGender = 'Miss';
    } else if (theGender === 'Male' || theGender === 'male') {
        theGender = 'Mr';
    }
    document.write(`<p>Hello ${theGender} ${theName} <p>`);
    document.write(`</div>`);
}

sayHello('mohamed', 'male');
sayHello('Fatima', 'Femal');
sayHello('Fatima');

document.write(`<hr>`);

/**
 * ************ Assignment Two ************
 *
 * دالة كتعطيها جوج ارقام و كتحدد ليها نوع العملية لي بغيتي بينهم واش الطرح، الضرب، اولا الجمع ..
 */

function calculate(firstNumber, secondNumber, operation) {
    document.write(`<div>`);
    if (secondNumber === undefined) {
        document.write(`<p>second number is not found</p>`);
    } else if (operation === undefined) {
        document.write(`<p>${firstNumber + secondNumber}</p>`);
    } else if (operation === 'add' || operation === '+') {
        document.write(`<p>${firstNumber + secondNumber}</p>`);
    } else if (
        operation === 'multiply' ||
        operation === 'x' ||
        operation === '*'
    ) {
        document.write(`<p>${firstNumber * secondNumber}</p>`);
    } else if (operation === 'substract' || operation === '-') {
        document.write(`<p>${firstNumber - secondNumber}</p>`);
    }
    document.write(`</div>`);
}

calculate(10);
calculate(10, 20);
calculate(10, 20, 'add');
calculate(38, 12, '*');
calculate(10, 20, '-');

document.write(`<hr>`);

/**
 * ************ Assignment Three ************
 *
 * دالة كتحول ليك العمر ديالك من السنة للشهر و الاسبوع و اليوم و الساعة و الدقيقة و الثانية
 */

function ageInTime(theAge, typeOfShow = 'list') {
    document.write(`<div>`);
    if (theAge >= 10 && theAge <= 100) {
        if (typeOfShow === 'table' || typeOfShow === 'Table') {
            document.write(`
        <table border = "1">
          <thead>
            <th>Your Age (years)</th>
            <th>in months</th>
            <th>in weeks</th>
            <th>in days</th>
            <th>in hours</th>
            <th>in minuts</th>
            <th>in seconds</th>
          </thead>
          <tbody>
            <tr>
              <td>${theAge}</td>
              <td>${theAge * 12}</td>
              <td>${theAge * 52}</td>
              <td>${theAge * 365}</td>
              <td>${theAge * 8_760}</td>
              <td>${theAge * 525_600}</td>
              <td>${theAge * 31_540_000}</td>
            </tr>
          </tbody>
        </table>
        `);
        } else if (typeOfShow === 'List' || typeOfShow === 'list') {
            document.write(`<p>Your age is ${theAge} [Years]</p>`);
            document.write(`<ul>
        <li><b>in Months: </b>${theAge * 12}</li>
        <li><b>in Weeks: </b>${theAge * 52}</li>
        <li><b>in Days: </b>${theAge * 365}</li>
        <li><b>in Hours: </b>${theAge * 8_760}</li>
        <li><b>in Minuts: </b>${theAge * 525_600}</li>
        <li><b>in Seconds: </b>${theAge * 31_540_000}</li>
        </ul>`);
        }
    } else {
        document.write(`<p>The Age is out of range</p>`);
    }
    document.write(`</div>`);
}

ageInTime(20, 'list');

document.write(`<hr>`);

/**
 * ************ Assignment Four ************
 *
 * Random Argument function challenge
 */

/**
 * ************ Assignment Five ************
 *
 * دالة كدير فالصفحة قائمة اختيارات مبين الارقام لي حطيتي ليها
 */

function creatSelectBox(startYear, endYear) {
    document.write(`<div>`);
    document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value = "${i}">${i}</option>`);
    }
    document.write(`</select>`);
    document.write(`</div>`);
}

creatSelectBox(2000, 2023);

document.write(`<hr>`);

/**
 * ************ Assignment Six ************
 *
 * دالة كضرب غاع الاعداد لي كتعطي ليها و كتجاهل الكلمات و كتخلي العدد العشري عدد صحيح
 */

function multiply(...numberToMultiply) {
    let result = 1;
    for (let i = 0; i < numberToMultiply.length; i++) {
        if (typeof numberToMultiply[i] === 'string') {
            continue;
        }
        result *= parseInt(numberToMultiply[i]);
    }
    return result;
}

document.write(multiply(2, 2, 2, 'hh', 10, 'fd', 2.44334233));
