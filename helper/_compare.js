const {performance} = require('perf_hooks');

function _compare(dataset, ...funcs) {
    const performanceChart = {};
    for (let func of funcs) {
        let time = 0;
        const updateTime = (item = []) => {
            const initialTime = performance.now();
            func.call(this, ...item);
            const finalTime = performance.now();
            time += (finalTime - initialTime);
        }
        for (let item of dataset) {
            updateTime(item);
        }
        !dataset.length && updateTime();
        time = time / (dataset.length || 1);
        performanceChart[func.name] = time;
    }
    console.table(performanceChart);
    const ascendingOrder = Object.keys(performanceChart)
        .sort((a, b) => performanceChart[a] - performanceChart[b])
        .join(' > ');
    console.log(ascendingOrder);
}

module.exports = _compare;
