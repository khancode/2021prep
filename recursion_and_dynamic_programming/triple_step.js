/* Question 8.1
Triple Step: A child is running up a staircase with n steps and can hop either
1 step, 2 steps, or 3 steps at a time.
Implement a method to count how many possible ways the child can run up the stairs.
*/
// Time is O(n), Space is O(n)
function countWays(n) {
    const memo = [];
    return topDown(n, memo);
}

function topDown(n, memo) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 0;
    }

    if (memo[n] === undefined) {
        memo[n] = topDown(n - 1, memo) + topDown(n - 2, memo) + topDown(n - 3, memo);
    }

    return memo[n];
}

console.log(countWays(2)); // 2
console.log(countWays(3)); // 4
console.log(countWays(4)); // 7