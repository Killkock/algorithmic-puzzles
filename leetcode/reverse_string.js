/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reduce( (acc, el) => el + acc, '');
};
