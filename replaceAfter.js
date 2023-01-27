//input: array, index as an integer
//out: a NEW array, with integer and integer + 1 index replaced by the strings hello and world respectively
//edge: -

//summary
//given an array and an index, return a new array with the items at Index and Index + 1 replaced with the strings hello and world respectively.

function replaceAfter(array, index) {
  //declare a variable to hold a new array to be returned
  const copyInputArray = array.slice();

  copyInputArray[index] = "Hello";
  copyInputArray[index + 1] = "world";

  //return new array from above
  return copyInputArray;
}

console.log(replaceAfter(["1", "2", "a", "b", "3", "4"], 2));
