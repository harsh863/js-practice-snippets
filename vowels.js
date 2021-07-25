const _run = require("./helper/_run");

function getVowelsCount1(value) {
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        const char = value[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

function getVowelsCount2(value) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < value.length; i++)
        if (vowels.includes(value[i].toLowerCase()))
            count++;
    return count;
}

/* RETURNS TOTAL NUMBER OF VOWELS IN GIVEN STRING */
/* Args:-
   arg1 => string from which vowels count need to be found.
*/


module.exports = { getVowelsCount1, getVowelsCount2 }
