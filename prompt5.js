//bubble sort
//start iterating thru array, comparing 2 elements at a time
//swap them if second is less than first
//at the end of first pass, largest # has bubbled to last index, so can be ignore on the next pass
//continue these passes until array is sorted
//not the most efficient

const bubbleSort = (inputArray) => {
  for(let i = 0; i < inputArray.length; i++) {
    for(let j = 0; j < inputArray.length - i -1; j++) {
      if(inputArray[j + 1] < inputArray[j]) {
        //ES6 way of swapping elements
        [inputArray[j + 1], inputArray[j]] = [inputArray[j], inputArray[j + 1]]
      }
    }
  }
  return inputArray;
}