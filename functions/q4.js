function calculateTax() {

    const taxrates = {
        low: 0.5,
        medium: 1.5,
        high: 2.5
    }

    return function (income) {

        if (income <= 10000) {
            return income * taxrates.low
        } else if (income <= 50000) {
            return income * taxrates.medium
        } else {
            return income * taxrates.high;

        }
    }

}

const taxcalculator = calculateTax();

const income1 = 5000;
const tax1 = taxcalculator(income1);
const income2 = 30000;
const tax2 = taxcalculator(income2);

const income3 = 70000;
const tax3 = taxcalculator(income3);

console.log(`For an income of $${income1}, the tax is: $${tax1}`);
console.log(`For an income of $${income2}, the tax is: $${tax2}`);
console.log(`For an income of $${income3}, the tax is: $${tax3}`);
