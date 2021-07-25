function _bulkRunner(values) {
    for (const value of values) {
        const dataset = value.dataset;
        for (const item of dataset) {
            value.func.call(this, ...item);
        }
    }
}

function _bulkAlternator(count, endWithStartingFunc, ...funcs) {
    for (let i = 0; i < count * funcs.length; i++) {
        const runningFuncIndex = i % funcs.length;
        funcs[runningFuncIndex].call(this);
    }
    if (endWithStartingFunc) {
        funcs[0].call(this);
    }
    console.log('\n');
}

function _bulkAlternatorPlus(count, endWithStartingFunc, ...values) {
    const funcCallCount = {};

    const callFunc = (activeFunc, activeDataset, currentFuncCount = 1) => {
        if (typeof activeDataset === "function") {
            activeFunc.call(this, activeDataset.call());
        } else {
            const currentArg = currentFuncCount > activeDataset.length ?
                activeDataset[activeDataset.length - 1] : activeDataset[currentFuncCount - 1];
            activeFunc.call(this, ...currentArg);
        }
    }

    for (let i = 0; i < count * values.length; i++) {
        const activeValueIndex = i % values.length;
        const activeFuncName = values[activeValueIndex].func.name;
        funcCallCount[activeFuncName] = (funcCallCount[activeFuncName] || 0) + 1;
        callFunc(values[activeValueIndex].func, values[activeValueIndex].dataset, funcCallCount[activeFuncName]);
    }
    if (endWithStartingFunc) {
        callFunc(values[0].func, values[0].dataset);
    }
    console.log('\n');
}

module.exports = { _bulkRunner, _bulkAlternator, _bulkAlternatorPlus };
