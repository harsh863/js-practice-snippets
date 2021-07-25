function matrix(size) {
    const matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = i.toString() + j.toString();
        }
    }
    return matrix;
}

/* GENERATES AN N * N ORDER MATRIX */
/* Args:-
   arg1 => N, order of matrix that needs to produced.
*/

module.exports = { matrix }
