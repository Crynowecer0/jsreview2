
//in - a string with some number of numbers in it
//out - a count of the number of valid numbers
//edge - non numeric characters, NaN??

//given a string that contains characters that can also be integers, return a count of the valid integers in the string

function countValidNumsInString(string) {

  //declare a variable to store the count of valid integers
  let count = 0;

  //iterate over the input string
  for (const char of string) {
if (Number.parseInt(char)) count++
  }
    //perform a test on each character to see if it can be a valid integer
    //based on tests, do not need to account for NaN


  //return the count of valid integers
  return count;

}


console.log(countValidNumsInString("1s2d3dsadas4")) // 4
console.log(countValidNumsInString("512,3,4!?!")) // 5
console.log(countValidNumsInString("123456")) // 6