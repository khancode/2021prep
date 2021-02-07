/* Question 8.8
Permutations with Dups: Write a method to compute all permutations of a string
whose characters are not necessarily unique.
The list of permutations should not have duplicates.
*/
// Time is O(n * n!) where n is the length of nums. It takes n steps to generate a single permutation.
// Since there are in total n! possible permutations, at most it would take us n*n! steps to generate
// all permutations
// Space is O(n) since the recursion stack will use at most n space
function permutationsWithDups(s) {
    const result = [];
    perm(s, '', new Set(), result);
    return result;
}

function perm(s, path, set, result) {
    // base case
    if (s.length === 0 && !set.has(path)) {
        result.push(path);
        set.add(path);
        return;
    }

    for (let i = 0; i < s.length; i++) {
        // Remove char i and find permutations of remaining chars
        const remainder = s.substring(0, i) + s.substring(i + 1, s.length);
        perm(remainder, path + s[i], set, result);
    }
}

console.log(permutationsWithDups('aab')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]