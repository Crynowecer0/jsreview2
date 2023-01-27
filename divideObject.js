
//inputs - an object, containing either strings or integers
//outputs - an array of two array
  //the first sub-array will contain a SUM of all of the integer values in the object
  //the second sub-array will contain a count of all of the characters in the string values in the object
//edge-cases - if NaN is a value? invalid inputs

function divideObject(object) {
//declare variables to hold the respective counts
let countChars = 0;
let sumInts = 0;

//iterate over the keys in the object
for (const key in object) {
  //test if they value stored at the key is a string,
  if (typeof object[key] === 'string') {
    countChars += object[key].length;
  } else if (typeof object[key] === 'number') {
    sumInts += object[key]
  }
    //if so count the characters and add the count to our main counter variable
  //test if the value stored at the key is a number
    //if it is, add the number to variable declared earlier that is tracking the sum
}


//return a an array of arrays, with the respective counts each held in a seperate sub-array
return [[sumInts],[countChars]]


}
