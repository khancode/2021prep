/* Question 1.6
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
If the "compressed" string would not become smaller than the original string,
your method should return the original string.
You can assume the string has only uppercase and lowercase letters (a-z).
*/

// Time is O(n), Space is O(n)
function stringCompression(s) {
   if (s.length <= 2) {
      return s;
   }

   let result = [];
   let count = 1;
   for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i-1]) {
         count++;
      } else {
         result.push(s[i-1] + count);
         count = 1;
      }
   }
   result.push(s[s.length-1] + count);

   return result.length < s.length ? result.join('') : s;
}

console.log(stringCompression('aabcccccaaa')); // a2b1c5a3