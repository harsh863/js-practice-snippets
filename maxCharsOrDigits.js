function maxCharsOrDigits(value) {
    const isNumber = typeof value === "number";
    value = value.toString();
    const frequencyBox = {};
    let maxInfo = { char: '', count: 0 };
    for (let char of value) {
        frequencyBox[char] = (frequencyBox[char] || 0) + 1;
        if (frequencyBox[char] > maxInfo.count) {
            maxInfo = { char: char, count: frequencyBox[char] };
        }
    }
    return isNumber ? +maxInfo.char : maxInfo.char;
}


/* RETURNS MOST REPEATED CHARACTER OR DIGIT IN GIVEN VALUE ( STRING / NUMBER ) */
/* Args:-
   arg1 => string / number from which most repeated character or digit needs to be found.

   NOTE:- When multiple characters / digits gets repeated same number of times, first one will be returned.
*/


module.exports = { maxCharsOrDigits }
