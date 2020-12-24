/* Question 1.4
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.

Example:
Input: "Tact Coa"
Ouput: True (permutations: "taco cat", "atco cta", etc)
*/

/* Pseudo code
input string s
palindrome length property:
   if s.length is even, freq of each char must be even
   if s.length is odd, there can only be one char with an odd freq
1. create variables set, length to count non-whitespace chars
2. add/remove chars to set
   for each char in s:
      if (char == ' '): continue
      convert char into lowercase letter
      set.has(char) ? set.remove(char) : set.add(char)
      length++;
3. return length % 2 === 0 ? set.size === 0 : set.size === 1;
*/

// Time is O(n), Space is O(1) since the set contains at most 26 alphabet chars
function palindromePermutation(s) {
   const set = new Set();
   let length = 0;

   for (const i in s) {
      if (s[i] === ' ') {
         continue;
      }
      const char = s[i].toLocaleLowerCase();
      set.has(char) ? set.delete(char) : set.add(char);
      length++;
   }

   return length % 2 === 0 ? set.size === 0 : set.size === 1;
}

console.log(palindromePermutation('Tact Coa')); // true
console.log(palindromePermutation('racecar')); // true
console.log(palindromePermutation('coding')); // false
