/* Question 8.9
Parens: Implement an algorithm to print all valid (e.g., properly opened and closed)
combinations of n pairs of parentheses.
*/
// Time is O(2^n),
// Space is O(n) since recursion stack uses at most n space
function parens(n) {
    const result = [];
    addParen('', n, n, result);
    return result;
}

function addParen(path, open, close, result) {
    if (open === 0 && close === 0) {
        result.push(path);
        return;
    }

    if (open > 0) {
        addParen(path + '(', open - 1, close, result);
    }
    if (close > open) {
        addParen(path + ')', open, close - 1, result);
    }
}

/* notes

keep count of open & close parentheses when generating combinations

We need to select either a left or a right paren.
When can we use a left paren, and when can we use a right paren?
1. Left Paren: As long as we havne't use up all the left parentheses,
               we can always insert a left paren.
2. Right Paren: We can insert a right paren as long as it won't lead to a syntax error.
                When will we get a syntax error? We will get a syntax error if there
                are more right parentheses than left.

input n
    open = n
    close = n
if (open > 0) {
    parens(open - 1, close)
}
if (close > open) {
    parens(open, close - 1)
}
*/

console.log(parens(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]