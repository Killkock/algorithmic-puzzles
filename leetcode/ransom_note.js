/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.


var canConstruct = function(ransomNote, magazine) {
    let can = true;
    magazine = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazine.indexOf(ransomNote[i]);
        if (~index) {
            magazine[index] = '';
            continue;
        }
        can = false;
    }

    return can;
};
