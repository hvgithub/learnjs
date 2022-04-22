let income = 25000;
let lowerLimits = [0, 10000, 20000];
let taxRates = [10, 20, 30];

const incomeTax = (income, lowerLimits, taxRate) => {
    let taxAmt = 0;
    for (let i = lowerLimits.length - 1; i >= 0; i--) {
        //max bracket --> last value of the limit
        upperLimit = lowerLimits[i];
        if (income > upperLimit) {
            taxAmt += (income - upperLimit) * taxRate[i] * 0.01;
            income = upperLimit;
        }
    }
    return taxAmt;
};

// console.log(incomeTax(income, lowerLimits, taxRates));

const logs = ["88 89 300", "89 88 300", "88 88 200", "88 88 300"];

function logTrans (logs, treshold) {
    let newlog = [];
    logs.map(item => {
        let a = item.split(" ");
        if (a[2] >= 300) {
            newlog.push(a[0], a[1]);
        }
    });

    let newmap = newlog.reduce(
        (acc, item) => ({
            ...acc,
            [item]: acc[item] ? acc[item] + 1 : 1
        }),
        {}
    );

    console.log(Object.keys(newmap).sort());
}

console.log(logTrans(logs));

function entriesCount (arr) {
    return arr.reduce(
        (acc, item) => ({
            ...acc,
            [item]: acc[item] ? acc[item] + 1 : 1
        }),
        {}
    );
}

console.log(entriesCount(["a", "b", "c", "b"]));
