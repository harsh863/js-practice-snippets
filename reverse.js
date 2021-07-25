const _run = require("./helper/_run");

function reverse1(value) {
    function reverseCore(str) {
        let reversedValue = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedValue += str[i];
        }
        return reversedValue;
    }

    const isNumber = typeof value === "number";
    const sign = Math.sign(value);
    const isFloat = isNumber && value !== parseInt(value);
    value = ((value) => isNumber && sign === -1 ? value.slice(1, value.length) : value)(value.toString());
    let reversedValue;
    if (isFloat) {
        const splicedValue = value.split('.');
        reversedValue = reverseCore(splicedValue[0]) + '.' +  reverseCore(splicedValue[1]);
    } else {
        reversedValue = reverseCore(value);
    }
    return isNumber ? (+reversedValue) * sign : reversedValue;
}

function reverse2(value) {
    function reverseCore(str) {
        return [...str].reverse().join('');
    }

    const isNumber = typeof value === "number";
    const sign = Math.sign(value);
    const isFloat = isNumber && value !== parseInt(value);
    value = ((value) => isNumber && sign === -1 ? value.slice(1, value.length) : value)(value.toString());
    let reversedValue;
    if (isFloat) {
        const splicedValue = value.split('.');
        reversedValue = reverseCore(splicedValue[0]) + '.' +  reverseCore(splicedValue[1]);
    } else {
        reversedValue = reverseCore(value);
    }
    return isNumber ? (+reversedValue) * sign : reversedValue;
}

function reverse3(value) {
    function reverseCore(str) {
        return [...str].reduce((reversedString, currentChar) => currentChar + reversedString, '');
    }

    const isNumber = typeof value === "number";
    const sign = Math.sign(value);
    const isFloat = isNumber && value !== parseInt(value);
    value = ((value) => isNumber && sign === -1 ? value.slice(1, value.length) : value)(value.toString());
    let reversedValue;
    if (isFloat) {
        const splicedValue = value.split('.');
        reversedValue = reverseCore(splicedValue[0]) + '.' +  reverseCore(splicedValue[1]);
    } else {
        reversedValue = reverseCore(value);
    }
    return isNumber ? (+reversedValue) * sign : reversedValue;
}

function reverse4(value) {
    function reverseCore(str) {
        return [...str].map((_, index) => str[str.length - index - 1]).join('');
    }

    const isNumber = typeof value === "number";
    const sign = Math.sign(value);
    const isFloat = isNumber && value !== parseInt(value);
    value = ((value) => isNumber && sign === -1 ? value.slice(1, value.length) : value)(value.toString());
    let reversedValue;
    if (isFloat) {
        const splicedValue = value.split('.');
        reversedValue = reverseCore(splicedValue[0]) + '.' +  reverseCore(splicedValue[1]);
    } else {
        reversedValue = reverseCore(value);
    }
    return isNumber ? (+reversedValue) * sign : reversedValue;
}


/* REVERSE THE STRING OR NUMBER (INT + FLOAT) */
/* Args:-
   arg1 => string / integer / float that need to be reversed
*/

module.exports = { reverse1, reverse2, reverse3, reverse4 }
