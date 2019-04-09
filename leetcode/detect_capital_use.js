/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const allCapitals = word.toUpperCase();
    const allLowers = word.toLowerCase();
    const capitalized = word[0].toUpperCase() + word.substring(1).toLowerCase();
    
    return word === allCapitals || word === allLowers || word === capitalized;
};
