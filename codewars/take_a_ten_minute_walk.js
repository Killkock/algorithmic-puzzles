// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  // w and e => x coord;
  // n and s => y coord;
  let walkCoord = { x: 0, y: 0};
  if (walk.length !== 10) {
    return false;
  }
  let ultimateCoord = walk.reduce(function(acc, el) {
    switch(el) {
      case 'n':
        acc.y += 1;
        return acc;
      case 's':
        acc.y -= 1;
        return acc;
      case 'w':
        acc.x -= 1;
        return acc;
      case 'e':
        acc.x += 1;
        return acc;
    }

  }, walkCoord);
  return ultimateCoord.x === 0 && ultimateCoord.y === 0;
}
