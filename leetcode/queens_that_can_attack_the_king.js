/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    // I'm not proud of the solution, but it works. Plan to improve it 
    const deskLength = 8;
    const waysToAttack = [];
    const attackingQueens = [];
    
    
    function getNextCell(x, y, n) {
        switch (n) {
            case 0:
                x--;
                break;
            case 1:
                x--;
                y++;
                break;
            case 2:
                y++;
                break;
            case 3:
                x++;
                y++;
                break;
            case 4:
                x++;
                break;
            case 5:
                x++;
                y--;
                break;
            case 6:
                y--;
                break;
            case 7: 
                x--;
                y--;
                break;
        }
        
        return {
            x,
            y
        }
    }
    
    
    for (let i = 0; i < 8; i++) {
        getWays(i);
    }
    
    
    for (let i = 0; i < waysToAttack.length; i++) {
        const way = waysToAttack[i];
        
        if (!way) continue;
    
        
        for (let j = 0; j < way.length; j++) {
            const queen = way[j];
            
            const attackingQueen = queens.find(el => el[0] === queen[0] && el[1] === queen[1]);
            
            if (attackingQueen) {
                attackingQueens.push(attackingQueen);
                break;
            }
        }
    }
    
    return attackingQueens;
    
    function getWays(n) {
        let x = king[0];
        let y = king[1];
        
        
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            const { x: newX, y: newY } = getNextCell(x, y, n);
            x = newX;
            y = newY;
            
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                if (!waysToAttack[n]) {
                    waysToAttack[n] = [[newX, newY]]
                } else {
                    waysToAttack[n].push([newX, newY]);
                }
            }
            
            
        }
    }
    
};
