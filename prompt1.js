const removeStringSpaces = (stringInput) => {
	let inputArray = stringInput.split('');
  let noSpacesArray = [];
  
  if(typeof stringInput !== 'string') {
  	return 'Enter valid string';
  } else {
  	for(let i = 0; i <= inputArray.length; i++) {
    	inputArray[i] === ' ' ? noSpacesArray.push('%20') : noSpacesArray.push(inputArray[i]);     	
      }
    }
    return noSpacesArray.join('');
 }