function fibonacci1(n) {
    if (n < 2)
        return n;
    return BigInt(fibonacci1(n - 1)) + BigInt(fibonacci1(n - 2));
}

function fibonacci2(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result.push(BigInt(result[i - 1]) + BigInt(result[i - 2]));
    }
    return result[n];
}

function fibonacciMemoize(func) {
    const cache = {};
    const resultantFunc =  function (...args) {
        const n = args[0];
        if (cache[n])
            return cache[n];
        const result = func.call(this, n);
        cache[n] = result;
        return result;
    }
    Object.defineProperty(resultantFunc, 'name', {value: func.name , writable: false});
    return resultantFunc;
}

function fibonacci3(n) {
    if (n < 2)
        return n;
    return BigInt(fibonacci3(n - 1)) + BigInt(fibonacci3(n - 2));
}

fibonacci3 = fibonacciMemoize(fibonacci3);


/* RETURNS Nth TERM OF FIBONACCI SERIES */
/* Args:-
   arg1 => n, nth term.
*/

module.exports = { fibonacci1, fibonacci2, fibonacci3 }
