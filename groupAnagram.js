function groupAnagram(values, caseSensitive = false) {
    const frequencyBox = {};
    for (let word of values) {
        if (!caseSensitive) word = word.toLowerCase();
        const sorted = [...word].sort().join('');
        frequencyBox[sorted] = [ ...(frequencyBox[sorted] || []), word ];
    }
    return Object.values(frequencyBox);
}

/* DIVIDES AN ARRAY OF STRING INTO GROUPS OF ANAGRAMS */
/* Args:-
        arg1 => array of string that needs to be grouped
*/


module.exports = { groupAnagram }
