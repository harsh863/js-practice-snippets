function fizzbuzz(end, start = 1) {
    let pattern = '';
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            pattern += 'fizzbuzz';
        } else if (i % 3 === 0) {
            pattern += 'fizz';
        } else if (i % 5 === 0) {
            pattern += 'buzz';
        } else {
            pattern += i;
        }
        pattern += ' ';
    }
    return pattern;
}


/* PRINT NUMBERS BETWEEN GIVEN RANGE SUCH THAT :-
      print "fizz" for number multiple of 3
      print "buzz" for number multiple of 5
      print "fizzbuzz" for number multiple of both 3 & 5
      print number if any above condition is not met
*/

module.exports = { fizzbuzz }
