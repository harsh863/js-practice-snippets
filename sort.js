const { merge } = require("./merge");


function bubbleSort1(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

function bubbleSort2(array) {
    for (let i = 0; i < array.length; i++) {
        let swapFlag = 1;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapFlag = 0;
            }
        }
        if (swapFlag) {
            break;
        }
    }
    return array;
}

function selectionSort1(array) {
    for (let i = 0; i < array.length; i++) {
        let minValueIndex = i;
        for (let j = i + 1; j < array.length; j++)
            if (array[j] < array[i])
                minValueIndex = j;
        if (minValueIndex !== i)
            [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
    }
    return array;
}

function selectionSort2(array) {
    for (let i = 0; i < array.length; i++) {
        let minValueIndex = i;
        let alreadySorted = 1;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i])
                minValueIndex = j;
            if (array[j] < array[j - 1])
                alreadySorted = 0;
        }
        if (alreadySorted)
            break;
        if (minValueIndex !== i)
            [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
    }
    return array;
}

function mergeSort1(array) {
    if (array.length === 1) return array;
    const midpoint = Math.floor(array.length / 2);
    return merge(mergeSort1(array.slice(0, midpoint)), mergeSort1(array.slice(midpoint)))
}

function mergeSort2(array) {
    if (array.length === 1) return array;
    let isAlreadySorted = 1;
    for (let i = 1; i < array.length; i++)
        if (array[i] < array[i - 1])
            isAlreadySorted = 0;
    if (isAlreadySorted) return array;

    const midpoint = Math.floor(array.length / 2);
    return merge(mergeSort2(array.slice(0, midpoint)), mergeSort2(array.slice(midpoint)))
}


/* RETURN GIVEN ARRAY IN SORTED ORDER */
/* Args:-
        arg1 => array to be sorted

   NOTE:- Sorting will be in increasing order.
*/

module.exports = { bubbleSort1, bubbleSort2, selectionSort1, selectionSort2, mergeSort1, mergeSort2 }
