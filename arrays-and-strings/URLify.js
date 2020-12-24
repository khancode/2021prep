/* Question 1.3
URLify: Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to
hold the additional characters, and that you are given the "true" length of the string.
(Note: If implementing in Java, please use a character array so that you can perform this operation in place).

Example:
Input: "Mr John Smith    ", 13
Ouput: "Mr%20John%20Smith" 
*/

/* Pseduo Code
input string s, length
1. create pointers
    i = length - 1;
    end = s.length - 1
2. traverse s until i >= 0
    while (i >= 0):
        if (s[i] === ' '):
            s[end--] = '0';
            s[end--] = '2';
            s[end--] = '%';
        else:
            s[end--] = s[i];
        i--;
*/

// Time is O(n), Space is O(1)
function URLify(s, length) {
   let i = length - 1;
   let end = s.length - 1;

   while (i >= 0) {
       if (s[i] === ' ') {
           s[end--] = '0';
           s[end--] = '2';
           s[end--] = '%';
       } else {
           s[end--] = s[i];
       }
       i--;
   }
}

/* Pseduo Code
input string s
1. Create 2 indices
   j = i = s.length - 1
2. decrement j until you reach a non-space character in s
3. shift characters to the end of s
   while j >= 0
      if s[j] === ' '
         set s[i--] = 0
         set s[i--] = 2
         set s[i--] = %
      else
         s[i--] = s[j]
      j--
*/

// Time is O(n), Space is O(1)
function URLifyWithoutLength(s) {
   let i = end = s.length - 1;
   while (end >= 0 && s[end] === ' ') end--;
   while (end >= 0) {
      if (s[end] === ' ') {
         s[i--] = '0';
         s[i--] = '2';
         s[i--] = '%';
      } else {
         s[i--] = s[end];
      }
      end--;
   }
}

const sl = 'Mr John Smith    '.split('');
URLify(sl, 13);
console.log(sl);

const s = 'Mr John Smith    '.split('');
URLifyWithoutLength(s);
console.log(s);