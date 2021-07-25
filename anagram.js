function areAnagrams1(value1, value2, caseSensitive = true) {
    value1 = value1.toString();
    value2 = value2.toString();
    if (!caseSensitive) {
        value1 = value1.toLowerCase();
        value2 = value2.toLowerCase();
    }
    const frequencyBox1 = {};
    const frequencyBox2 = {};
    for (let char of value1) {
        frequencyBox1[char] = (frequencyBox1[char] || 0) + 1;
    }
    for (let char of value2) {
        frequencyBox2[char] = (frequencyBox2[char] || 0) + 1;
        if (!frequencyBox1[char] || frequencyBox1[char] < frequencyBox2[char]) {
            return false;
        }
    }
    for (let char in frequencyBox1) {
        if (frequencyBox1[char] !== frequencyBox2[char]) return false;
    }
    for (let char in frequencyBox2) {
        if (frequencyBox1[char] !== frequencyBox2[char]) return false;
    }
    return true;
}

function areAnagrams2(value1, value2, caseSensitive = true) {
    value1 = value1.toString();
    value2 = value2.toString();
    if (!caseSensitive) {
        value1 = value1.toLowerCase();
        value2 = value2.toLowerCase();
    }
    return [...value1].sort().join("") === [...value2].sort().join("");
}

/* CHECK IF TWO STRINGS OR INTEGERS ARE ANAGRAMS OR NOT */
/* Args:-
        arg1 => first  string or integer
        arg2 => second string or integer
        arg3 => if the matching should be case sensitive or not
*/

module.exports = {areAnagrams1, areAnagrams2};
