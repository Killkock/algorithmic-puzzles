// link to the task: https://www.codewars.com/kata/land-perimeter/train/javascript

function landPerimeter(land) {
  var perimeter = 0;

  for (var i = 0; i < land.length; i++) {
    for (var j = 0; j < land[i].length; j++) {
      if (land[i][j] === 'O') continue;
      perimeter += calculateNeighbours(j, i);
    }
  }

  return `Total land perimeter: ${perimeter}`;


  function calculateNeighbours(x, y) {
    var neighbours = 4;

    if (land[y][x + 1] === 'X') {
      neighbours--;
    }

    if (land[y][x - 1] === 'X') {
      neighbours--;
    }

    if (land[y - 1] && land[y - 1][x] === 'X') {
      neighbours--;
    }

    if (land[y + 1] && land[y + 1][x] === 'X') {
      neighbours--;
    }

    return neighbours;
  }
}
