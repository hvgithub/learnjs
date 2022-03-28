let income = 25000;
let lowerLimits = [0, 10000, 20000];
let taxRates = [10, 20, 30];

function calculateTax (income, lowerLimits, taxRates) {
    let taxToPay = 0;

    for (let i = lowerLimits.length - 1; i >= 0; i--) {
        console.log(`Upper limit = ${lowerLimits[i]} - taxRate=${taxRates[i]}`);
        const upperLimit = lowerLimits[i];
        if (income > upperLimit) {
            console.log(`incomde=${income}`);
            taxToPay += ((income - upperLimit) * taxRates[i]) / 100;
            income = upperLimit;
        }
    }

    return taxToPay;
}
console.log(calculateTax(income, lowerLimits, taxRates));
