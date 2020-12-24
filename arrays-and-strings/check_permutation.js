/* Question 1.2
Check Permutation: given two strings, write a method to check if one is a permutation of the other.
*/

/* Pseudo Code
Given strings a, b
1. Create hashmap map: char -> charCount
2. Insert all a characters into map
   for each char in a
      if char exists in map, then increment charCount
      else, add char to map with charCount 1
3. Check all b characters exist in map
   if char of b is in map, then reduce charCount
      if charCount reaches 0, delete char from map
   else return false
4. if code reaches to the end, return map.size === 0
*/

// Time is O(a) since the algo will only run when lengths of a & b are the same
// Space is O(1) since the map will contain at most 26 keys (alphabet chars) or 52 keys (case sensitive)
function checkPermutation(a, b) {
   if (a.length !== b.length) {
      return false;
   }

   const map = new Map(); // char -> count
   for (const i in a) {
      const char = a[i];
      map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
   }

   for (const i in b) {
      const char = b[i];
      if (map.has(char)) {
         const count = map.get(char);
         count === 1 ? map.delete(char) : map.set(char, count - 1);
      } else {
         return false;
      }
   }

   return map.size === 0;
}

console.log(checkPermutation('abc', 'cab')); // true
console.log(checkPermutation('aabb', 'aaaa')); // false