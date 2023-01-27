//in -  an object of arrays, a target value
//out - is a count of the number of appearaces of the target value
//edge cases -

//summary
//return a count of the number of times the target value appears within the arrays stored as values within the input object

function countIfHasValue(object, targetVal) {
  //declare a variable to hold the count
  let count = 0;

  //loop over each key of the input object
  for (const key in object) {
    //check if the target value is present in each array stored at the key
 if(object[key].includes(targetVal)) count++
    // if (object.key.includes(targetVal)) count++
    //if the target value is present, increment the count variable
  }

  //return the count
  return count;
}

//tests
let obj = {
  a: [1, 10, 3],
  b: [4, 1, 7],
  c: [7, 7, 7],
  d: [10, 7, 12],
};
console.log(countIfHasValue(obj, 1)); // 2
console.log(countIfHasValue(obj, 7)); // 3
console.log(countIfHasValue(obj, 10)); // 2
console.log(countIfHasValue(obj, 13)); // 0
