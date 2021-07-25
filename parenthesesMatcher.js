const {Stack} = require("./stack");

function isValidParentheses(value) {
    value = value.replace(/[^\(\)\[\]\{\}]/g, '');
    const stack = new Stack();
    for (let i = 0; i < value.length; i++) {
        if (value[i] === '(' || value[i] === '[' || value[i] === '{') {
            stack.push(value[i]);
        } else {
            const lastOpeningParentheses = stack.pop();
            if (
                !lastOpeningParentheses ||
                lastOpeningParentheses === '(' && value[i] !== ')' ||
                lastOpeningParentheses === '[' && value[i] !== ']' ||
                lastOpeningParentheses === '{' && value[i] !== '}'
            ) return false;
        }
    }
    return stack.isEmpty();
}

/* CHECK IF PARENTHESES IN EXPRESSION ARE MATCHED CORRECTLY */
/* Args:-
        arg1 => expression to be evaluated
*/


module.exports = { isValidParentheses }
