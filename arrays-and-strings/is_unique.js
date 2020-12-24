/* Question 1.1
Check Permutation: Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

/* Pseudo Code
    set = hashset (key == char)
*/

// Time is O(n), Space is O(1) since the set will store at most 26 alphabet chars or 52 chars (case sensitive)
function isUnique(s) {
    const set = new Set();
    for (const i in s) {
        const char = s[i];
        if (set.has(char)) {
            return false;
        }
        set.add(char);
    }
    return true;
}

/* Pseudo Code
    sort s
    for each index in s:
        if (s[i] === s[i-1]) return false;
    return true
*/

// Time is O(n(log(n))), Space is O(n)
function isUniqueWithoutSet(s) {
    s = s.split('').sort().join('');
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            return false;
        }
    }
    return true;
}
 
console.log(isUnique('abc')); // true
console.log(isUnique('abca')); // false
console.log(isUniqueWithoutSet('abc')); // true
console.log(isUniqueWithoutSet('abca')); // false