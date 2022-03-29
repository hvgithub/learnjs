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

console.log(incomeTax(income, lowerLimits, taxRates));
