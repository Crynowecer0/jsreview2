//in - array of numbers
//out - a NEW array containing a selection of the non-even numbers from the input array, but in reverse order
//edge - input size of 0?

//copy the array
//reverse it
//filter it based on the prompt

function reverseValues(array) {
  //copy the array
  const copyInput = array.slice();
  //declare a variable to hold the reversed copy
  const reversedCopy = [];

  //loop over the cloned array
  for (let = i; i < copyInput.length; i++) {
    //for each element in the cloned, check if it is even
    if (copyInput[i] % 2 === 0) {
    //if true: splice the array from the current index to the durrent index + 2
    copyInput.splice(i, i+2)
    }

  }
console.log(copyInput)
  //reverse the filtered version
  //loop over the array starting at the end, push each element to the variable we declared earlier

  //return the variable declared earlier to hold the reversed array
}

console.log(reverseValues([1, 1, 3, 3, 2])); // [3, 3, 1, 1]
console.log(reverseValues([1, 3, 5, 7])); // [7, 5, 3, 1]
