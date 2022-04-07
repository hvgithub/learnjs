function fib (n, memo = {}) {
    if (n == 1 || n == 2) {
        return 1;
    }

    if (n in memo) {
        return memo[n];
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    console.log(n, memo[n]);
    return memo[n];
}

//console.log(fib(5));

function fibMap (n, memo = new Map()) {
    if (n == 1 || n == 2) {
        return 1;
    }

    if (memo.get(n) !== undefined) {
        console.log("I am here.", memo.get(n));
        return memo.get(n);
    }

    let fibval = fib(n - 1, memo) + fib(n - 2, memo);

    memo.set(n, fibval);
    console.log(n, memo);

    return memo.get(n);
}

// console.log("fib=", fibMap(5));

// console.log("fib=", fibMap(8));

// combinations

const combinations = (elements, count = 0) => {
    if (elements.length == 0) return [[]];
    let firstEle = elements[0];
    let rest = elements.slice(1);

    console.log("Elements=", elements, "First=", firstEle, "rest=", rest);

    let comboswithFirst = [];
    count++;
    let comboswithoutFirst = combinations(rest, count);

    console.log(`Count=${count}, combos=${comboswithoutFirst}`);
    //console.log(comboswithoutFirst);
    comboswithoutFirst.forEach(comb => {
        console.log(
            `count=${count}, comb=${comb},
             comboswithFirst=${comboswithFirst},
              comboswithoutFirst=${comboswithoutFirst}`
        );
        const withFirst = [...comb, firstEle];
        comboswithFirst.push(withFirst);
    });

    return [...comboswithFirst, ...comboswithoutFirst];
    //  console.log(`${comboswithFirst} - ${[...comboswithoutFirst]}`);
};

console.log(combinations(["a", "b", "c"]));
