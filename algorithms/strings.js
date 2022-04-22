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
const base62 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function base62_encode (base10) {
    let encoded = "";
    while (base10 > 0) {
        encoded = base62[base10 % 62] + encoded;
        base10 = Math.floor(base10 / 62);
        console.log(`Math.floor(base10 / 62)=${Math.floor(base10 / 62)}`);
    }
    return encoded;
}

//console.log("bsae62=", base62_encode(1000));

function base62_getIndex (item) {
    return base62.split("").indexOf(item);
}

function base62_decode (val62) {
    let newarr = val62.split("");
    console.log(newarr.length);
    let decode = 0;
    let count = 0;
    for (let i = newarr.length - 1; i >= 0; i--) {
        let pos = base62_getIndex(newarr[i]);
        console.log("pos", pos);
        decode = decode + Math.pow(62, count) * pos;
        console.log(
            `i=${i},decode=${decode} count=${count} (62 ^ count)=${Math.exp(
                62,
                count
            )} * pos=${pos}`
        );

        count++;
    }
    return decode;
}

//console.log("Decoded val=", base62_decode("qi"));

function intToStringArr () {
    let a = 1234567;
    let newStrArr = Array.from(String(a), item => Number(item));

    console.log("result=", newStrArr);

    let newArr2 = String(a).split("");
    //    .map(num => Number(num));
    console.log("newArr2=", newArr2);
}

function numToString (num) {
    let arrStr = Array.from(String(num), n => Number(n));

    arrStr = String(num).localeCompare("12");
    return arrStr;
}

console.log(numToString(123456));

function compStr (word, checkana) {
    let wordMap = word.split("").reduce(
        (acc, letter) => ({
            ...acc,
            [letter]: acc[letter] ? acc[letter] + 1 : 1
        }),
        {}
    );

    let checkanaMap = checkana.split("").reduce(
        (acc, letter) => ({
            ...acc,
            [letter]: acc[letter] ? acc[letter] + 1 : 1
        }),
        {}
    );

    console.log(
        Object.keys(wordMap).every(item => {
            if (wordMap[item] === checkanaMap[item]) {
                return true;
            } else {
                false;
            }
        })
    );
}

//console.log(compStr("hello", "ollhe"));

//Find is a substr is present in the str
function longestSubStr (str, substr) {
    const strLength = str.length;
    const substrLength = substr.length;
    let j = 0;
    let strCheckLength = 0;
    let foundsubstr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === substr[j]) {
            console.log(str[i], substr[j]);

            strCheckLength++;
            foundsubstr = foundsubstr + substr[j];
            if (strCheckLength == substrLength) {
                console.log("Found substr", foundsubstr);
                return true;
            }
            j++;
        } else {
            foundsubstr = "";
            strCheckLength = 0;
        }
    }
}

console.log(longestSubStr("helloworld", "world"));
