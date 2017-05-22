/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

var isAnagram = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }
    return s.length === t.length && true;
};
