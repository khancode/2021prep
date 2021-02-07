/* Question 8.5
Recursive Multiply: Write a recursive function to multiply two positive integers
without using the * operator. You can use addition, subtraction, and bit shifting,
but you should minimize the number of those operations
*/
// Time is O(s) where s is the smaller of the two numbers,
// Space is O(s) since recursion stack will use s space
function recursiveMultiply(a, b) {
    const smaller = a < b ? a : b;
    const bigger = a < b ? b : a;
    return recursiveMultiplyHelper(smaller, bigger);
}

function recursiveMultiplyHelper(a, b) {
    // base case
    if (a === 1) {
        return b;
    }

    return recursiveMultiplyHelper(a - 1, b) + b;
}

/* notes

Call stack where (a, b) is (3, 4)
3 => 4 + 4 + 4
2 => 4 + 4
1 => 4

*/

// Time is O(log(s)) where s is the smaller of the two numbers,
// Space is O(log(s)) since recursion stack and memo will use log(s) space
function minProduct(a, b) {
    const smaller = a < b ? a : b;
    const bigger = a < b ? b : a;
    return minProductHelper(smaller, bigger, []);
}

function minProductHelper(smaller, bigger, memo) {
    if (smaller === 0) { // 0 x bigger = 0
        return 0;
    } else if (smaller === 1) { // 1 x bigger = bigger
        return bigger;
    } else if (memo[smaller]) {
        return memo[smaller];
    }

    // Compute half. If uneven, computer other half. If even, double it.
    const s = smaller >> 1; // Divide by 2 (truncates decimal)
    const side1 = minProductHelper(s, bigger, memo); // Compute half
    let side2 = side1;
    if (smaller % 2 === 1) {
        side2 = minProductHelper(smaller - s, bigger, memo);
    }

    // Sum and cache.
    memo[smaller] = side1 + side2;
    return memo[smaller];
}

/* notes

Call stack where (a, b) is (3, 4)
17 => (23 + 23 + 23 + 23 + 23 + 23 + 23 + 23) + (23 + 23 + 23 + 23 + 23 + 23 + 23 + 23 + 23)
8 => (23 + 23 + 23 + 23) + (23 + 23 + 23 + 23)
4 => (23 + 23) + (23 + 23)
2 => (23) + (23)
1 => 23


9 (17 - 8) => (23 + 23 + 23) + (23 + 23 + 23 + 23 + 23 + 23)
3 => (23) + (23 + 23)
1 => 23

2 (3 - 1) => (23) + (23)
1 => 23

6 (9 - 3) => (23 + 23 + 23) + (23 + 23 + 23)
3 => (23) + (23 + 23)
1 => 23

3 => (23) + (23 + 23)
1 => 23
*/

// Time is O(log(s)) where s is the smaller of the two numbers,
// Space is O(log(s)) since recursion stack will use log(s) space
function fastestMinProduct(a, b) {
    const smaller = a < b ? a : b;
    const bigger = a < b ? b : a;
    return fastestMinProductHelper(smaller, bigger);
}

function fastestMinProductHelper(smaller, bigger) {
    if (smaller === 0) {
        return 0;
    } else if (bigger === 1) {
        return bigger;
    }

    const s = smaller >> 1; // Divide by 2 (truncates decimal)
    const halfProd = fastestMinProductHelper(s, bigger);

    if (smaller % 2 === 0) {
        return halfProd + halfProd;
    } else {
        return halfProd + halfProd + bigger;
    }
}

console.log(recursiveMultiply(17, 23)); // 391
console.log(minProduct(17, 23)); // 391
console.log(fastestMinProduct(17, 23)); // 391