//in - an array of arrays (a matrix), and a move or a target value
//out - an array of values, showing where in the matrix in the form of [row, col] where the move appears
//edge - move not existing => return -1

//search the matrix for the value, and return its position in the format of row, col

function findFirstMove(matrix, value) {
  //loop over the rows in the matrix from 0 to
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let spot = matrix[row][col]
      if (spot === value) {
        return [row, col]
      }

    }
  }
  return -1;
  //loop over each column in the matrix
  //check if the value present at row, col is equal to the target
  //if it is, return [row, target]

  //return -1 if the above completes without a return
}

let moves = [
  ["a", "b", "c"],
  ["d", "a", "f"],
  ["g", "h", "h"],
];

console.log(findFirstMove(moves, "a")); // [0, 0]
console.log(findFirstMove(moves, "h")); // [2, 1]
console.log(findFirstMove(moves, "z")); // -1
