const removeArrayDuplicates = (inputArray) => {
    if(Array.isArray(inputArray) === false) {
        return 'This is array-neous!';
    } else {  
        var singleValuesArray = [];
        inputArray.forEach(element => {
            if (!singleValuesArray.includes(element)) {
            singleValuesArray.push(element);
            }
        });
        return singleValuesArray;
    }
    
}

// with filter 
const removeArrayDuplicates2 = (inputArray2) => {
    return inputArray2.filter((element, index) => inputArray2.indexOf(element) === index);
}