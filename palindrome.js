function isPalindrome1(value, caseSensitive = true) {
    value = value.toString();
    let i = 0,
        j = value.length - 1;
    if (!caseSensitive) {
        value = value.toLowerCase();
    }
    while (i < j) {
        if (value[i] === value[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}


function isPalindrome2(str, caseSensitive = true) {
    str = str.toString();
    if (!caseSensitive) { str = str.toLowerCase(); }
    return str === [...str].reverse().join('');
}


function isPalindrome3(str, caseSensitive = true) {
    str = str.toString();
    if (!caseSensitive) { str = str.toLowerCase(); }
    return [...str].every((char, index) => char === str[str.length - index - 1]);
}


/* CHECK IF NUMBER OR STRING IS PALINDROME OR NOT */
/* Args:-
        arg1 => string / number that needs to be checked
        arg2 => whether matching should be case sensitive or not
*/

module.exports = { isPalindrome1, isPalindrome2, isPalindrome3 }
