/* Question 8.11
Coins: Given an infinite number of quarters (25 cents), dimes (10 cents),
nickels (5 cents), and pennies (1 cent), write code to calculate the number
of ways of representing n cents.
*/
// Time is O(n * amount) where n is the length of coins array,
// Space is O(amount) since dp array takes amount space
function changeBottomUp(amount, coins) {
    const dp = [];
    dp[0] = 1;
    for (let i = 1; i <= amount; i++) {
        dp[i] = 0;
    }
    
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        for (let curAmount = 1; curAmount <= amount; curAmount++) {
            if (coin <= curAmount) {
                dp[curAmount] += dp[curAmount - coin];
            }
        }
    }
    
    return dp[amount];
}

/* notes

recurrence relation
F(x) = number of combinations for x amount
for c in coins:
    for (let curAmount = 1; i <= amount; i++):
        compute combinations using c and store in dp[curAmount]

example:
amount 5, coins = [1, 2, 5]

using coin 1
F(0) = 1
F(1) = F(1 - 1) = F(0) = 1
F(2) = F(2 - 1) = F(1) = 1
F(3) = F(3 - 1) = F(2) = 1
F(4) = F(4 - 1) = F(3) = 1
F(5) = F(5 - 1) = F(4) = 1

after coin 1, combine with coin 2
F(0) = 1
F(1) = 1 + 0 = 1
F(2) = 1 + F(2 - 2) = 1 + F(0) = 1 + 1 = 2
F(3) = 1 + F(3 - 2) = 1 + F(1) = 1 + 1 = 2
F(4) = 1 + F(4 - 2) = 1 + F(2) = 1 + 2 = 3
F(5) = 1 + F(5 - 2) = 1 + F(3) = 1 + 2 = 3

after coins 1 * 2, combine with coin 5
F(0) = 1
F(1) = 1 + 0 = 1
F(2) = 2 + 0 = 2
F(3) = 2 + 0 = 2
F(4) = 3 + 0 = 3
F(5) = 3 + F(5 - 5) = 1 + F(0) = 3 + 1 = 4
*/

const amount = 75;
const coins = [1, 5, 10, 25];

console.log(changeBottomUp(amount, coins)); // 121