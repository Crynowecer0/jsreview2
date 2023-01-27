//in - a matrix, and target value
//out - a boolean representing if the target value is present in the matrix
//edge - missing inputs

//return a boolean represetning if a target value is present in a matrix

function inMatrix(matrix, targetVal) {
  //loop over the rows of the of the matrix
  for (let row = 0; row < matrix.length; row++) {
    //loop over the columns of the matrix
    for (let col = 0; col < matrix[row].length; col++) {
      //check if a cell is equal to the target value
      if (matrix[row][col] === targetVal) return true
      //if it is, return true
    }
  }

  //return false
  return false
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(inMatrix(matrix, 5)); // true
console.log(inMatrix(matrix, 8)); // true
console.log(inMatrix(matrix, 10)); // false
