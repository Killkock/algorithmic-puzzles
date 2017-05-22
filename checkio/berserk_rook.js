// https://js.checkio.org/mission/berserk-rook/

"use strict";
function berserkRook(marbles, step) {
    var bsrkPos = determinePawnPosition(marbles),
        enemies = step.map(determinePawnPosition),
        amountOfEnemies = step.length,
        gameArray = [],
        i,
        j,
        x,
        y;

    for (i = 0; i < 8; i++) {
        gameArray[i] = [];
        for (j = 0; j < 8; j++) {
            if (i === bsrkPos[0] && j === bsrkPos[1]) {
                gameArray[i][j] = 2;
                continue;
            }
            gameArray[i][j] = 0;
        }
    }

    for (i = 0; i < enemies.length; i++) {
        [x, y] = enemies[i];
        gameArray[x][y] = 1;
    }


    return play();

    function play() {
        var amount = [];

        iter(0, gameArray, bsrkPos);

        return Math.max.apply(null, amount);


        function iter(enemy, arr, bsrkPos, moves) {

            if (!arr || !bsrkPos) {
                amount.push(enemy - 1);
                return;
            } else if (!isTherePlaceToMove(bsrkPos)) {
                amount.push(enemy);
                return;
            }

            var down = move('down', bsrkPos, arr),
                up = move('up', bsrkPos, arr),
                left = move('left', bsrkPos, arr),
                right = move('right', bsrkPos, arr);

            iter(enemy + 1, down.arr, down.newBsrkPos);
            iter(enemy + 1, up.arr, up.newBsrkPos);
            iter(enemy + 1, left.arr, left.newBsrkPos);
            iter(enemy + 1, right.arr, right.newBsrkPos);
        }

        function move(dir, bsrkPos, array) {
            var [x, y] = bsrkPos,
                newBsrkPos,
                arr = deepSlice(array);

            if (dir === 'down') {
                newBsrkPos = findEnemy(x, y, 7, y, arr);
            } else if (dir === 'up') {
                newBsrkPos = findEnemy(x, y, 0, y, arr);
            } else if (dir === 'left') {
                newBsrkPos = findEnemy(x, y, x, 0, arr);
            } else if (dir === 'right') {
                newBsrkPos = findEnemy(x, y, x, 7, arr);
            }

            if (newBsrkPos) {
                arr[newBsrkPos[0]][newBsrkPos[1]] = 2;
                arr[x][y] = 0;
            }

            return { arr, newBsrkPos };

        }

        function findEnemy(inX, inY, enX, enY, arr) {
            var x, y;
            if (inX > enX || inY > enY) {
                for (x = inX; x >= enX; x--) {
                    for (y = inY; y >= enY; y--) {
                        if (arr[x][y] === 1) {

                            return [x, y];
                        }
                    }
                }

                return null;
            }

            for (x = inX; x <= enX; x++) {
                for (y = inY; y <= enY; y++) {
                    if (arr[x][y] === 1) {
                        return [x, y];
                    }
                }
            }

            return null;
        }

        function isTherePlaceToMove(bsrkPos) {
            var [x, y] = bsrkPos;

            for (i = 0; i < 8; i++) {
                if (gameArray[i][y] === 1 || gameArray[x][i] === 1) {
                    return true;
                }
            }

            return false;
        }

    }

    function determinePawnPosition(pawn) {
        var letters = 'abcdefgh';
        var position = [];

        position[0] = Math.abs(pawn[1] - 8);
        position[1] = letters.indexOf(pawn[0]);

        return position;
    }

    function deepSlice(arr) {
        var newArr = [],
            i,
            j;

        for (i = 0; i < arr.length; i++) {
            newArr[i] = arr[i].slice();
        }

        return newArr;
    }
}
