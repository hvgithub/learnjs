//
const canSumv1 = (targetSum, numbers) => {
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;

    // Iterate over the numbers
    // rem is the node
    // n is the edge
    for (let n of numbers) {
        let rem = targetSum - n;
        console.log(rem);
        if (canSum(rem, numbers)) {
            return true;
        }
    }
    return false;
};

const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;

    // Iterate over the numbers
    // rem is the node
    // n is the edge
    for (let n of numbers) {
        let rem = targetSum - n;
        console.log(rem);
        memo[targetSum] = canSum(rem, numbers, memo);

        if (memo[targetSum] === true) {
            return true;
        }
    }
    return false;
};
//console.log(canSum(7, [2, 3, 2, 7]));
//console.log(canSum(7, [3]));

//---------------------

let retMap = new Map();
const howSum = (targetSum, numbers) => {
    if (targetSum == 0) return [];
    if (targetSum < 0) return null;

    for (let n of numbers) {
        let remainder = targetSum - n;
        let remainderCombo = howSum(remainder, numbers);
        console.log(remainderCombo);
        if (remainderCombo !== null) {
            return [...remainderCombo, n];
        }
    }
    return null;
};

//console.log("Shld be true...", howSum(7, [2, 3, 7, 4]));
//console.log("Shld be false", howSum(7, [100]));

let newArr = [];
let combos = [];
const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let bestList = null;
    for (let n of numbers) {
        let reminder = targetSum - n;

        let reminderList = bestSum(reminder, numbers, memo);
        memo[reminder] = reminderList;

        if (reminderList !== null) {
            const combo = [...reminderList, n];
            // console.log(
            //     `remL=${reminderList}, remin=${reminder},combo=${combo}, n=${n}, newArr=${newArr}`
            // );
            newArr.push(combo);
            if (bestList === null || combo.length < bestList.length) {
                bestList = combo;
            }
        }
    }

    memo[targetSum] = bestList;
    // console.log(newArr);
    return bestList;
};

//console.log(bestSum(7, [2, 3, 4, 7]));
//console.log(bestSum(200, [500]));

//
const combi = elements => {
    if (elements.length === 0) return [[]];

    let firstEle = elements[0];
    let rest = elements.slice(1);

    let combWithoutFirst = combi(rest);
    let combWithFirst = [];

    combWithoutFirst.forEach(ele => {
        const newval = [...ele, firstEle];
        combWithFirst.push(newval);
    });
    return [...combWithFirst, ...combWithoutFirst];
};

//console.log(combi(["a", "b", "c"]));
