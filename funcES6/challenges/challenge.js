// node -- experimental - json - modules lesson3 / challenge.js


import words from "an-array-of-english-words";

const getLetterCount = arr => arr.reduce((acc, x) => ({
    ...acc,
    [x]: acc[x] ? acc[x] + 1 : 1
}), {});


// let word1 = "cinema";
// let word2 = "iceman";

const compareWords = (word1, word2) => {
    let word1Occ = getLetterCount(word1.split(""));

    let word2Occ = getLetterCount(word2.split(""));

    // console.log(word1Occ, word2Occ);

    // console.log(Object.keys(word1Occ), Object.values(word1Occ), Object.keys(word2Occ), Object.values(word2Occ));

    // const isString = (string) => string === "c" ? true : false;

    /*   Object.keys(word1Occ).forEach((item) => {
        console.log("item=", item);
        console.log(word1Occ[item] === word2Occ[item] ? true : false);
    }); */

    const retval = Object.keys(word1Occ).length === Object.keys(word2Occ).length && Object.keys(word1Occ).every((item) => word1Occ[item] === word2Occ[item]);
    console.log("words=", word1, word2, retval);
    return retval;
}

const findAnagrams = (word, allWords) => { // const partialWords = allWords.filter((item) => item.length == word.length)
    return(allWords.filter((wordToCheck) => compareWords(word, wordToCheck)).filter((currentWord) => currentWord !== word));


}

console.log(findAnagrams('cinema', words));
