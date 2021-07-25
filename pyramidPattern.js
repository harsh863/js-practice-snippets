const _run = require("./helper/_run");

function pyramidPattern(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        pattern += (generateString(i, rows - 1) + (i < rows ? '\n' : ''));
    }
    return pattern;
}

function generateString(currentRow, totalLength) {
    let string = '';
    for (let i = totalLength * -1; i <= totalLength; i++) {
        string += Math.abs(i) < currentRow ? "*" : ' ';
    }
    return string;
}

/* Demonstration:- Let rows = 3

   Ist Outer Loop => i = 1
    Run Inner Loop from -2 to 2 with currentRow as 1;
        <= '  *  ' { Math.abs(-2) < 1: ' ', Math.abs(-1) < 1: ' ', Math.abs(0) < 1: '*', Math.abs(1) < 1: ' ', Math.abs(2) < 1: ' '  }

    ∴ pattern = |  *  |

   IInd Outer Loop => i = 2
    Run Inner Loop from -2 to 2 with currentRow as 2;
        <= ' *** ' { Math.abs(-2) < 2: ' ', Math.abs(-1) < 2: '*', Math.abs(0) < 2: '*', Math.abs(1) < 2: '*', Math.abs(2) < 2: ' '  }

    ∴ pattern = |  *  |
                | *** |

   IIIrd Outer Loop => i = 1
    Run Inner Loop from -2 to 2 with currentRow as 3;
        <= '*****' { Math.abs(-2) < 3: '*', Math.abs(-1) < 3: '*', Math.abs(0) < 3: '*', Math.abs(1) < 3: '*', Math.abs(2) < 3: '*'  }

    ∴ pattern = |  *  |
                | *** |
                |*****|
*/

module.exports = { pyramidPattern }
