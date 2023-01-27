//inputs - an array of POSITIVE integers
//outputs - an object containing two keys, even and odd, which point to the count of the even and odd integers in the input array
//edge cases - no

//summary
//returns the count of the even ints and odd ints from an array of positive integers.

function collectOddsAndEvens(array) {
  //object that holds odd, even keys
  const count = {
    odd: 0,
    even: 0,
  };

  //iterate over the input array
  for (const int of array) {
    //test if the current element is even, if it is, increment the value stored at the 'even' key in our count object

    if (int % 2 === 0) {
      count.even++;
    } else {
      count.odd++;
    }
    //if not even, increment the value stored at the odd key in the count object
  }

  //return the count object
  return count;
}

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]))