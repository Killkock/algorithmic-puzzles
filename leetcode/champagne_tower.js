/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
 
// fast solution using loop  
var champagneTower = function(poured, query_row, query_glass) {
  const tower = [];
  for (let i = 0; i <= query_row; i++) {
    tower.push([]);
    for (let j = 0; j <= i; j++) {
      if (j === 0 && i === 0) {
        tower[0][0] = poured;
        continue;
      };

      let result;

      if (tower[i - 1]) {
        result = getExcess(tower[i - 1][j - 1]) + getExcess(tower[i - 1][j]); 
      } else {
        result = 0;
      }

      tower[i].push(result);
    }
  }

  if (!tower[query_row]) return 0;
  if (!tower[query_row][query_glass]) return 0;
    
  const result = tower[query_row][query_glass];

  return result > 1 ? 1 : result;
}

function getExcess(amount) {
  if (!amount || amount <= 1) return 0;
  
  return (amount - 1) / 2
}

// first solution using recursion

var champagneTower2 = function(poured, query_row, query_glass) {
    const tower = [];
    
    function recursive(depth, position, pouredLeft) {
        if (!tower[depth]) tower.push([]);
        
        if (!tower[depth][position]) {
            tower[depth][position] = 0;
        }
        
        if (!pouredLeft) return;
        
        let difference = 1 - tower[depth][position];
        if (pouredLeft >= difference) {
            tower[depth][position] = 1;
            
            let remain = (pouredLeft - difference) / 2;
            recursive(depth + 1, position, remain);
            recursive(depth + 1, position + 1, remain);
        } else {
            tower[depth][position] += pouredLeft;
        }
    }

    recursive(0, 0, poured)
    return tower;
    if (!tower[query_row]) return 0;
    if (!tower[query_row][query_glass]) return 0;
    
    return tower[query_row][query_glass];
};
