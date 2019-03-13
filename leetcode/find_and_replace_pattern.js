/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  
  return words.filter(function(word) {
    var permutations = {};
    var permutatedWord = '';
    var permutationsValues;

    for (let i = 0; i < pattern.length; i++) {
      let letter = pattern[i];

      if (!permutations[letter]) {
        permutations[letter] = word[i];
      } else if (permutations[letter] && permutations[letter] !== word[i]) {
        return false;
      }
    }

    for (let i = 0; i < pattern.length; i++) {
      let letter = pattern[i];

      permutatedWord += permutations[letter];
    }

    permutationsValues = Object.values(permutations);

    for (let i = 0, arr = []; i < permutationsValues.length; i++) {
      let value = permutationsValues[i];

      if (~arr.indexOf(value)) {
        return false;
      }

      arr.push(value);
    }

    return permutatedWord === word;

  })
};
