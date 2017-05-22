// https://js.checkio.org/mission/pawn-brotherhood/solve/

"use strict";

function safePawns(data) {
    var normalData = data.map(determinePawnPosition),
        arr = [],
        i,
        j,
        x,
        y;

    for (i = 0; i < 8; i++) {
        arr[i] = [];
        for (j = 0; j < 8; j++) {
            arr[i][j] = 0;
        }
    }

    for (i = 0; i < normalData.length; i++) {
        [x, y] = normalData[i];
        arr[x][y] = 1;
    }

    return normalData.reduce( (acc, el) => acc + isSafe(el), 0);

    function isSafe(pawn) {
        [x, y] = pawn;

        return (arr[x + 1] && (arr[x + 1][y + 1] || arr[x + 1][y - 1])) ? 1 : 0;
    }

    function determinePawnPosition(pawn) {
        var letters = 'abcdefgh',
            position = [];

        position[0] = Math.abs(pawn[1] - 8);
        position[1] = letters.indexOf(pawn[0]);

        return position;
    }
}
