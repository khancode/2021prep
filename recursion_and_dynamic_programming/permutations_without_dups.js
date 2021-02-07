/* Question 8.7
Permutations without Dups: Write a method to compute all permutations of a string
of unique characters.
*/
// Time is O(n * n!) where n is the length of nums. It takes n steps to generate a single permutation.
// Since there are in total n! possible permutations, at most it would take us n*n! steps to generate
// all permutations
// Space is O(n) since the recursion stack will use at most n space
function permutationsWithoutDups(s) {
    const result = [];
    perm(s, '', result);
    return result;
}

function perm(s, path, result) {
    // base case
    if (s.length === 0) {
        result.push(path);
        return;
    }

    for (let i = 0; i < s.length; i++) {
        // Remove char i and find permutations of remaining chars
        const remainder = s.substring(0, i) + s.substring(i + 1, s.length);
        perm(remainder, path + s[i], result);
    }
}

/* notes

input string has n length
num of permuations without dups => n!
n * (n - 1) * (n - 2) * ... * 1

for example a string with length 4
4 * 3 * 2 * 1 = 24 permutations without dups

In essence, we just need to "try" each character as the first character
and then append the permutations:

P(a1, a2, a3) = {a1 + P(a2, a3)} + {a2 + P(a1, a3)} + {a3 + P(a1, a2)}
{a1 + P(a2, a3)} => a1a2a3, a1a3a2
{a2 + P(a1, a3)} => a2a1a3, a2a3a1
{a3 + P(a1, a2)} => a3a1a2, a3a2a1
*/

console.log(permutationsWithoutDups('abc')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]