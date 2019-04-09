/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const topRow = 'qwertyuiop';
    const middleRow = 'asdfghjkl';
    const bottomRow = 'zxcvbnm';
    const rows = [topRow, middleRow, bottomRow];
    
    return words.filter((el) => {
        let desiredRow = null;
        for (let i = 0; i < el.length; i++) {
          for (let j = 0; j < rows.length; j++) {
              let index = rows[j].indexOf(el[i].toLowerCase());
              
              if (~index) {
                  if (desiredRow == null) desiredRow = j;
                  if (~desiredRow && desiredRow !== j) return false;
                  break;
              } 
          }
        }
        
        return true;
    })
};
