const _log = require("./_log");
const _compare = require("./_compare");

function _run(dataset, shouldLog, ...funcs) {
    if (shouldLog) {
        for (let item of dataset) {
            _log(funcs[0], ...item);
        }
        !dataset.length && _log(funcs[0]);
    } else {
        _compare(dataset, ...funcs);
    }
}

module.exports = { _run };
