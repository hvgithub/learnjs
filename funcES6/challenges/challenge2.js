const currentInputValues = {
    firstName: '', // Must be at least 2 characters
    lastName: '', // Must be at least 2 characters
    zipCode: '', // Must be exactly 5 characters
    state: '', // Must be exactly 2 characters
}


const nameLengthCheck = name => name.length >= 2 ? true : "Err: must be atleast 2";
const zipLengthCheck = zip => zip.length === 5 ? true : "Err: must be 5";
const stateLengthCheck = state => state.length === 2 ? true : "Err: must be 2";
const inputCriteria = ({firstName: [nameLengthCheck], lastName: [nameLengthCheck], zipCode: [zipLengthCheck], state: [stateLengthCheck]});

const getErrorMessages = (inputObj, inputCriteria) => Object.keys(inputObj).reduce((acc, key) => [
    ...acc,
    ... inputCriteria[key].map((test) => test(inputObj[key]))
], []);


// keys --> inputCriteria(keys)
// console.log(Object.keys(currentInputValues).every((key) => inputCriteria(currentInputValues[key])));
console.log(getErrorMessages(currentInputValues, inputCriteria));


/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
    */
