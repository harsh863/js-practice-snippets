function capitalize1(value) {
    value = value.toString();
    let resultantValue = '';
    const splicedSentence = value.split(' ');
    for (let i = 0; i < splicedSentence.length; i++) {
        if (splicedSentence[i] !== '') {
            resultantValue += (splicedSentence[i][0].toUpperCase() + splicedSentence[i].slice(1, ) + ' ');
        }
    }
    return resultantValue.trim();
}

function capitalize2(value) {
    value = value.toString();
    return [...value].map((char, index) => value[index - 1] === ' ' || index === 0 ? char.toUpperCase() : char).join('');
}


/* CAPITALIZE THE GIVEN SENTENCE */
/* Args:-
        arg1 => sentence that needs to be capitalized.

   NOTE:- This will remove any extra spaces around the sentence.
*/

module.exports = { capitalize1, capitalize2 }
