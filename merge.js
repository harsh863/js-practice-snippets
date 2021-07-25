function merge(arrayA = [], arrayB = []) {
    const resultantArray = [];
    while (arrayA.length && arrayB.length) {
        arrayA[0] <= arrayB[0] ? resultantArray.push(arrayA.shift()) : resultantArray.push(arrayB.shift());
    }
    return [...resultantArray, ...arrayA, ...arrayB];
}

/* RETURN RESULT OF TWO MERGED ARRAYS */
/* Args:-
        arg1 => first array
        arg2 => second array

   NOTE:- If both arrays are in sorted order, result will be in sorted order too.
*/


module.exports = { merge };
