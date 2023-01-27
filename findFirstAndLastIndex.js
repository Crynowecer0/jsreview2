//inputs - an array of integers, target value
//outputs - an array containg the first index and the last index where the target value is found OR -1 if <2 occurances
//edge caes -

function findFirstAndLastIndex(array, targetInt) {

//variables to track the first index and the last index
const firstIndex = array.indexOf(targetInt);
const lastIndex = array.lastIndexOf(targetInt);


console.log(firstIndex, lastIndex)

//run tests for the condtions
//first =/ last
//both first and last must be truthy
if (firstIndex === lastIndex || !(firstIndex && lastIndex)) return -1


//return arrray containg first and last index in that order
return [firstIndex, lastIndex]

}

//tests
console.log(findFirstAndLastIndex([1, 2, 3, 4, 5], 3)) // -1
console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 12)) // -1
console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 2)) // [1, 3]
