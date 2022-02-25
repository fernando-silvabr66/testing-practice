function stringLength(string) {
  const stringSize = string.length;
  if (stringSize < 1 || stringSize > 10) {
    throw `String size error`;
  } else {
  return stringSize;
  }
}

function reverseString(string) {
  let newString = "";
  for(let i = string.length-1; i >=0 ; i--){
      newString += string[i];
  }
  return newString;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};



module.exports = { stringLength, reverseString, capitalizeFirstLetter };