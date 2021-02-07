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

const amount = 75;
const coins = [1, 5, 10, 25];

console.log(changeBottomUp(amount, coins)); // 121