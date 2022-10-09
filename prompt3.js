//iterate through the string 
//compare current and upcoming characters 
//if both character !==, count ++ and concatenate

//doesn't print counts of 1 for single letters
const compressString = (inputString) => {
	if(typeof inputString !== 'string' || inputString.length === 0 ) {
  	return 'Please enter valid string';
  } 
  
  let outputString = '';
  let count = 0;
  
  for(let i = 0; i <= inputString.length; i++) {
  	count ++;
    if(inputString[i] !== inputString[i+1] && count > 1) {
    	outputString = `${outputString}${inputString[i]}${count}`;
      count = 0;
    } else if(inputString[i] !== inputString[i+1]) {
    	outputString = `${outputString}${inputString[i]}`;
      count = 0;
    }
  }
  return outputString;
}


//returns count of 1 for single characters 
// const compressString = (inputString) => {
// 	if(typeof inputString !== 'string' || inputString.length === 0 ) {
//   	return 'Please enter valid string';
//   } 
  
//   let outputString = '';
//   let count = 0;
  
//   for(let i = 0; i <= inputString.length; i++) {
//   	count ++;
//     if(inputString[i] !== inputString[i+1]) {
//     	outputString += inputString[i] + count;
//       count = 0;
//   }
//   return outputString;
// }