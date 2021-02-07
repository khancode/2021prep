/* Question 8.10
Paint Fill: Implement the "paint fill" function that one might see on
many image editing programs. That is, given a screen (represented by a
two-dimensional array of colors), a point, and a new color, fill in
the surrounding area until the color changes from the original color.
*/
// Time is O(n) where n is the number of pixels in the image,
// Space is O(n)
function paintFill(image, sr, sc, newColor) {
    const originalColor = image[sr][sc];
    if (originalColor !== newColor) {
        fillColorDFS(image, sr, sc, originalColor, newColor);
    }
}

function fillColorDFS(image, r, c, originalColor, newColor) {
    if (r < 0 || r === image.length || c < 0 || c === image[r].length || image[r][c] !== originalColor) {
        return;
    }

    image[r][c] = newColor;

    fillColorDFS(image, r - 1, c, originalColor, newColor); // Up
    fillColorDFS(image, r + 1, c, originalColor, newColor); // Down
    fillColorDFS(image, r, c - 1, originalColor, newColor); // Left
    fillColorDFS(image, r, c + 1, originalColor, newColor); // Right
}

/* notes

perform DFS to fill surrounding area with new color
*/

const image = [
    [3, 3, 0, 0, 3],
    [3, 0, 0, 1, 1],
    [2, 2, 0, 1, 3],
    [2, 3, 3, 3, 3],
];

paintFill(image, 1, 1, 4);
console.log(image);
/*
[
  [ 3, 3, 4, 4, 3 ],
  [ 3, 4, 4, 1, 1 ],
  [ 2, 2, 4, 1, 3 ],
  [ 2, 3, 3, 3, 3 ]
]
*/