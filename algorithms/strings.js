function distributeArray (n, max) {
    var a = [];
    var r = n;
    var i = 0;
    var c = Math.ceil(n / max);
    console.log("a,r,i,c", a, r, i, c);
    while (r > 0) {
        console.log(`r=${r},c=${c}, Math.ceil(r/c)=${Math.ceil(r / c)}, mod=${n % max}`);
        var t = Math.ceil(r / c);
        a[i++] = t;
        r = r - t;
        c--;
        console.log(`a=[${a}], t=${t}, r=${r},c=${c}, i=${i}`);
    }
}

//distributeArray(10, 3);
//distributeArray(100, 63);

function boundarray (n, max) {
    let ceil = Math.ceil(n / max); // Always round to next
    let a = [];
    let remainder = n;
    let i = 0;
    while (remainder > 0) {
        let val = Math.ceil(remainder / ceil);
        a[i] = val;
        remainder = remainder - val;
        ceil--;
    }
    return a;
}

function sub (str = "ccarnival", substr = "car") {
    let strA = str.split("");
    let substrA = substr.split("");
    let j = 0;

    for (let i = 0; i < strA.length; i++) {
        console.log(`${str[i]}-${substr[i]}`);
        if (str[i] === substr[j]) {
            console.log("found match..");
            if (j == substrA.length - 1) {
                console.log("Found full string .. starting at...", `${i - j}`);
                return i;
            }
            j++;
        } else {
            console.log("reset j..");
            i--;
            j = 0;
        }
    }
}

//sub();

function findAna (str1 = "iceman", str2 = "manice") {
    let str1A = str1.toLowerCase().split("");
    let str2A = str2.toLowerCase().split("");
    console.log(`${str1A.sort()}<---->${str2A.sort()}`);
    if (str1A.sort().join() == str2A.sort().join()) {
        console.log("Anagram");
    }

    let newStr1A = str1A.reduce(
        (acc, i) => ({
            ...acc,
            [i]: acc[i] ? acc[i] + 1 : 1
        }),
        {}
    );

    let newStr2A = str2A.reduce(
        (acc, i) => ({
            ...acc,
            [i]: acc[i] ? acc[i] + 1 : 1
        }),
        {}
    );

    console.log(
        str1A.reduce(
            (acc, i) => ({
                ...acc,
                [i]: acc[i] ? acc[i] + 1 : 1
            }),
            {}
        )
    );

    if (Object.keys(newStr1A).every(item => newStr1A[item] === newStr2A[item])) {
        console.log("------------HOHHOOO");
    }
    console.log(`${str1A}.... ${Object.keys(newStr1A)}`);
}
//findAna();

function revString (str = "Hel$$lo") {
    let strA = str.split("");

    let revString = [];
    let alphaOnly = strA.filter(item => checkAlpha(item));
    let j = alphaOnly.length - 1;

    console.log(alphaOnly);
    for (let i = 0; i < alphaOnly.length - 1; i++) {
        const start = alphaOnly[i];
        const end = alphaOnly[j];
        console.log(start, end);

        revString[i] = end;
        revString[j] = start;
        j--;
    }
    console.log(`${alphaOnly}<------->${revString}`);
    let temp = [];
    j = 0;
    for (let i = 0; i < strA.length; i++) {
        if (!checkAlpha(strA[i])) {
            temp.push(strA[i]);
        } else {
            console.log(`i=${i},j=${j},${revString[j]}`);
            temp.push(revString[j]);
            j++;
        }
    }
    console.log(temp.join());
}

function checkAlpha (string) {
    console.log(`Checking str ... ${string}`);
    if (/[a-zA-Z]/.test(string)) {
        return true;
    }
    return false;
}
//revString();

function dupes (words = "Hello world hello") {
    const arr = words.toLowerCase().split(" ");
    console.log(`${arr}`);
    const dupes = arr.reduce(
        (acc, word) => ({
            ...acc,
            [word]: acc[word] ? acc[word] + 1 : 1
        }),
        {}
    );

    console.log(
        arr.reduce(
            (acc, word) => ({
                ...acc,
                [word]: acc[word] ? acc[word] + 1 : 1
            }),
            {}
        )
    );

    let a = Object.keys(dupes).filter(key => {
        console.log(`dupes=${dupes},key=${key},val=${dupes[key]}`);
        if (dupes[key] >= 2) {
            return true;
        }
    });
    console.log(`Final:::${a}`);
}

//dupes();

function bitly () {}
