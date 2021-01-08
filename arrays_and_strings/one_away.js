/* Question 1.5
One Away: there are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character.
Given two strings, write a function to check if they are
one edit (or zero edits) away.

Example:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

/* Pseudo Code
Use string length to identify the 3 possible cases.
given strings a, b
1. replace a character => a.length === b.length
2. insert a character => a.length - 1 === b.length
3. remove a character => a.length + 1 === b.length
*/

// Time is O(n), Space is O(1)
function oneAway(a, b) {
   if (a.length === b.length) {
      // check replace a character
      return oneEditReplace(a, b);
   } else if (a.length - 1 === b.length) {
      // check insert a character
      return oneEditInsert(a, b);
   } else if (a.length + 1 === b.length) {
      // check remove a character
      return oneEditInsert(b, a);
   }
   return false;
}

function oneEditReplace(a, b) {
   let foundDiff = false;
   for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
         if (foundDiff) {
            return false;
         }
         foundDiff = true;
      }
   }
   return true;
}

function oneEditInsert(long, short) {
   let l = 0;
   let s = 0;
   while (l < long.length) {
      if (long[l] === short[s]) {
         s++;
      } else {
         if (l !== s) {
            return false;
         }
      }
      l++;
   }
   return true;
}

/* Pseudo Code
input string a, b (assuming case insensitive)
1. if lengths of a & b differ greater than 1: return false
2. create map = HashMap (key->val, char->freq)
3. Insert the longer string into map
    for each char in longStr:
        map.has(char) ? map.put(char, map.get(char) + 1) : map.put(char, 1);
4. Remove shortStr chars from map
    for each char in shortStr:
        if (map.has(char)): map.delete(char);
5. return map.size <= 1;
*/

// Time is O(a + b), Space is O(1) since map contains at most 26 keys (alphabet chars)
function oneAwayMap(a, b) {
   if (Math.abs(a.length - b.length) > 1) {
       return false;
   }

   let short = a.length >= b.length ? a : b;
   let long = short === a ? b : a;
   const map = new Map();

   for (const i in long) {
       const char = long[i];
       map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
   }

   for (const i in short) {
       const char = short[i];
       if (map.has(char)) {
           const count = map.get(char);
           count === 1 ? map.delete(char) : map.set(char, map.get(char) - 1);
       }
   }

   return map.size <= 1;
}

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false