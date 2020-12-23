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
1. Create hashset set, create length to count non-whitespace chars
2. add each char of s to set
   skip if char is whitespace
   if char already exists in set, then remove from set
   else add char to set
   length++;
3. Determine its boolean return value
   if length is an even number && set.size === 0
      return true
   else if length is an odd number && set.size === 1
      return true
   else return false
*/

// Time is O(n), Space is O(n)
function palindromePermutation(s) {
   const set = new Set();
   let length = 0;
   for (i in s) {
      const char = s[i].toLocaleLowerCase();
      if (char !== ' ') {
         set.has(char) ? set.delete(char) : set.add(char);
         length++;
      }
   }
   if (length % 2 === 0 && set.size === 0) {
      return true;
   } else if (length % 2 === 1 && set.size === 1) {
      return true;
   } else {
      return false;
   }
}

console.log(palindromePermutation('Tact Coa')); // true
console.log(palindromePermutation('racecar')); // true
console.log(palindromePermutation('coding')); // false
