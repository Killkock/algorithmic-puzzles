/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/*
    Given a string and an integer k, you need to reverse the first k characters
    for every 2k characters counting from the start of the string.
    If there are less than k characters left, reverse all of them.
    If there are less than 2k but greater than or equal to k characters,
    then reverse the first k characters and left the other as original.
    Example:
        Input: s = "abcdefg", k = 2
        Output: "bacdfeg"
*/

// var reverseStr = function(s, k) {
//     let newStr = '';
//     for (let i = 0; i < s.length; i++) {

//         if (i % (2 * k) === 0) {
//             let index = i;

//             for (let j = k - 1; j >= 0; j--) {

//                 if (index + j >= s.length) {
//                     continue;
//                 }

//                 newStr += s[index + j];
//                 i++;
//             }

//             i--;
//             continue;
//         }

//         newStr += s[i];
//     }

//     return newStr;
// };


function reverseStr(s, k) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (i % (2 * k) === 0) {
      result += reverse(s.slice(i, i + k));
      i += k - 1;
      continue;
    }
    result += s[i];
  }

  return result;

  function reverse(str) {
    let result = '';
    str = str.split('').filter(el => el !== undefined).join('');

    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }

    return result;

  }
}
