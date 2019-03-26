/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    var shipsCount = 0;
    var spottedShip = false;
    var visitedSpots = [];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            var sign = `${i}.${j}`;
            var cell = board[i][j];
            
            if (~visitedSpots.indexOf(sign)) continue;
            visitedSpots.push(sign);
            
            if (cell === 'X' && spottedShip) {

              if (j === board[i].length - 1) {
                spottedShip = false;
                shipsCount++;
              }
              continue;
            } else if (cell === 'X') {
              spottedShip = true;
              checkColumn(i + 1, j, j === board[i].length - 1);
            } else if (cell === '.' && spottedShip) {
              spottedShip = false;
              shipsCount++;
            }
            
        }
    }

    return shipsCount;
    
    function checkColumn(x, y, isLast) {
        var spotted = false;
        while(board[x] && board[x][y] === 'X') {
            spotted = true;
            visitedSpots.push(`${x}.${y}`);
            x++;
        }
        
        if (spotted || isLast) {
            spottedShip = false;
            shipsCount++;
        }
    }
};
