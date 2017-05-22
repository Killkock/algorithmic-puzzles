// link to the task: https://www.codewars.com/kata/55aa075506463dac6600010d

function listSquared(m, n) {
    let result = [];
    for (let i = m; i <= n; i++) {
      let divisors = calcDivisors(i);
      let divisorsSquares = squares(divisors);
      let sumOfSquares = sum(divisorsSquares);
      let sqrtOfSum = Math.sqrt(sumOfSquares);
      if (sqrtOfSum % 1 === 0) {
        result.push([i, sumOfSquares]);
      }
    }
    return result;

}

function sum(arr) {
  return arr.reduce( (acc, el) => acc + el, 0);
}

function squares(arr) {
  return arr.map( el => el * el );
}

function calcDivisors(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0)
      result.push(i);
  }

  return result;
}
