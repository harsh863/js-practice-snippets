function rightTrianglePattern1(rows) {
    let pattern = '';

    function generateString(count, totalLength) {
        let string = '';
        for (let i = 0; i < totalLength; i++) {
            string += i < count ? "*" : ' ';
        }
        return string;
    }

    for (let i = 1; i <= rows; i++) {
        pattern += (generateString(i, rows) + (i < rows ? '\n' : ''));
    }
    return pattern;
}

function rightTrianglePattern2(rows) {
    let pattern = '';

    function generateString(count, totalLength) {
        return Array.from(Array(totalLength)).map((_, index) => index < count ? '#' : ' ').join('');
    }

    for (let i = 1; i <= rows; i++) {
        pattern += (generateString(i, rows) + (i < rows ? '\n' : ''));
    }
    return pattern;
}


/* Demonstration:- Let rows = 3

   Ist Outer Loop => i = 1
    Run Inner Loop from 0 to 3 (excluding) with star count as 1;
        <= '*  ' { 0 < 1: '*', 1 < 1: ' ', 2 < 1: ' ' }

    ∴ pattern = |*  |

   IInd Outer Loop => i = 2
    Run Inner Loop from 0 to 3 (excluding) with star count as 2;
        <= '** ' { 0 < 2: '*', 1 < 2: '*', 2 < 2: ' ' }

    ∴ pattern = |*  |
                |** |

   IIIrd Outer Loop => i = 1
    Run Inner Loop from 0 to 3 (excluding) with star count as 3;
        <= '***' { 0 < 3: '*', 1 < 3: '*', 2 < 3: '*' }

    ∴ pattern = |*  |
                |** |
                |***|
*/

module.exports = { rightTrianglePattern1, rightTrianglePattern2 }
