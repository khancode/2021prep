/* Question 1.8
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
its entire row and column are set to 0.

Example
Input:
1  2  3  4
5  6  0  8
9 10 11 12

Output:
1  2  0  4
0  0  0  0
9 10  0 12
*/

// Time is O(n*m), Space is O(n+m)
function zeroMatrix(matrix) {
   const rowSet = new Set();
   const colSet = new Set();

   for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
         if (matrix[r][c] === 0) {
            rowSet.add(r);
            colSet.add(c);
         }
      }
   }

   // Set flagged rows to 0
   for (row of rowSet) {
      for (let c = 0; c < matrix[0].length; c++) {
         matrix[row][c] = 0;
      }
   }

   // Set flagged columns to 0
   for (col of colSet) {
      for (let r = 0; r < matrix.length; r++) {
         matrix[r][col] = 0;
      }
   }
}

const matrix = [
   [1,  2,  3,  4],
   [5,  6,  0,  8],
   [9, 10, 11, 12],
];
console.log('before:', matrix);
zeroMatrix(matrix);
console.log('after:', matrix);