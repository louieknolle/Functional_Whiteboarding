//iterate through a string, don't convert to array
//check to see if each element's value occurs again in the rest of string 
// returns true or false

const stringIsUnique = (stringInput) => {
  for (i = 0; i < stringInput.length; i++) {
    if (stringInput.indexOf(stringInput[i]) !== stringInput.lastIndexOf(stringInput[i])) {
      return false;
    }
  }
  return true;
}