//in - an array of objects
//out - is the SUM of all of the values stored across the objects
//edge case - none

//returns the sum of all of the values stored within the objects contained within an array of objects

function calculateMonthlyOrders(array) {
  //declare a variable to hold the sum
  let sum = 0;
  //loop over each object in the array
  for (const object of array) {
    //loop over the keys in the object
    for (const key in object) {
      //update the sum to equal its current value + the value stored at the object key
      sum += object[key];
    }
  }

  //return the sum variable declared earlier
  return sum;
}
