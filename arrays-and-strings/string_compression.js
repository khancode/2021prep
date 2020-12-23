/* Question 1.6
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
If the "compressed" string would not become smaller than the original string,
your method should return the original string.
You can assume the string has only uppercase and lowercase letters (a-z).
*/

// Time is O(n), Space is O(n) assuming string concat is O(1)
function stringCompression(s) {
   let result = '';
   let count = 0;
   for (let i = 0; i < s.length; i++) {
      count++;
      if (i + 1 === s.length || s[i] !== s[i+1]) {
         result += s[i] + count;
         count = 0;
      }
   }
   return result.length < s.length ? result : s;
}

console.log(stringCompression('aabcccccaaa')); // a2b1c5a3