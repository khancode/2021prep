/* Question 1.7
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel
in the image is 4 bytes, write a method to rotate the image by 90 degrees.
Can you do this in place?

Example
Input:
1 2 3
4 5 6
7 8 9

Output:
7 4 1
8 5 2
9 6 3
*/

// Time is O(n^2), Space is O(1)
function rotateMatrix(matrix) {
   const n = matrix.length;
   for (let layer = 0; layer < Math.trunc(n/2); layer++) {
      
      const first = layer;
      const last = n - 1 - layer;
      for (let i = first; i < last; i++) {
         let offset = i - first;

         // Save Top
         const temp = matrix[first][i];
         // Left -> Top
         matrix[first][i] = matrix[last-offset][first];
         // Bottom -> Left
         matrix[last-offset][first] = matrix[last][last-offset];
         // Right -> Bottom
         matrix[last][last-offset] = matrix[i][last];
         // Top -> Right
         matrix[i][last] = temp;
      }
   }
}

const matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];
// const matrix = [
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [13, 14, 15, 16]
// ];
console.log('before:', matrix);
rotateMatrix(matrix);
console.log('after:', matrix);