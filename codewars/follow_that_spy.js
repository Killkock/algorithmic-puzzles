// link to the task: https://www.codewars.com/kata/5899a4b1a6648906fe000113

function findRoutes(routes) {
  let path = [];
  let cities = {};
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (cities[routes[i][j]] !== undefined) {
        cities[routes[i][j]] += 1;
      } else {
        cities[routes[i][j]] = 1;
      }
    }
  }
  outer: for (let key in cities) {
    for (let i = 0; i < routes.length; i++) {
      if (cities[key] === 1 && key === routes[i][0]) {
        path.push(key);
        break outer;
      }
    }
  }
  while (path.length !== Object.keys(cities).length) {
    for (let i = 0; i < routes.length; i++) {
      if (path.slice(-1)[0] === routes[i][0]) {

        path.push(routes[i][1]);
      }
    }
  }
  return path.join(', ');
}
