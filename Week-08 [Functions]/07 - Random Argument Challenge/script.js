/**
 * First Solution
 */

function showDetails(a, b, c) {
    typeof a === 'string'
        ? (theName = a)
        : typeof a === 'number'
            ? (theAge = a)
            : typeof a === 'boolean'
                ? (theStatus = a)
                : (a = 'Unknown');
    typeof b === 'string'
        ? (theName = b)
        : typeof b === 'number'
            ? (theAge = b)
            : typeof b === 'boolean'
                ? (theStatus = b)
                : (b = 'Unknown');
    typeof c === 'string'
        ? (theName = c)
        : typeof c === 'number'
            ? (theAge = c)
            : typeof c === 'boolean'
                ? (theStatus = c)
                : (c = 'Unknown');

    document.write(
        `<p>hello ${theName}, your age is ${theAge}, ${theStatus === true
            ? `you are available for hiring`
            : `you are not available for hiring`
        }</p>`
    );
}

showDetails('Ahmed', 20, true);
showDetails(false, 34, 'Fatima');
showDetails(50, 'Said', true);



/**
 * Second Solution
 */

function Details(...data) {
    let a, b, c;
    for (let i = 0; i < 3; i++) {
        if (typeof data[i] === 'string') {
            a = data[i];
        }
        if (typeof data[i] === 'number') {
            b = data[i];
        }
        if (typeof data[i] === 'boolean') {
            if (data[i] === true) {
                c = 'you are accepted for hiring';
            } else {
                c = 'you are not accepted for hiring';
            }
        }
    }
    console.log(`Hi ${a}, your age is ${b}, ${c}`);
}

Details(true, 'Hamooody', 44);
