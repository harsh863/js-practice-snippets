function chunk1(array, chunkSize) {
    const chunkCollector = [];
    let counter = 0;
    while (counter < array.length) {
        chunkCollector.push(array.slice(counter, counter + chunkSize));
        counter += chunkSize;
    }
    return chunkCollector;
}

function chunk2(array, chunkSize) {
    const chunkCollector = [];
    for (let i = 0; i < array.length; i++) {
        const chunkIndex = Math.floor(i / chunkSize);
        if (!chunkCollector[chunkIndex])
            chunkCollector.push([]);
        chunkCollector[chunkIndex].push(array[i]);
    }

    return chunkCollector;
}


/* SPLIT ONE SINGLE ARRAY INTO MULTIPLE CHUNKS OF GIVEN SIZE */
/* Args:-
        arg1 => array that needs to be broken into smaller chunks
        arg2 => size of chunks into which array needs to broken
*/

module.exports = { chunk1, chunk2 }
