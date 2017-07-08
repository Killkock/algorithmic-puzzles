// link to the task: https://www.codewars.com/kata/54129112fb7c188740000162

function prefill(n, v) {
  if (typeof n === 'boolean' ||
      n != Math.round(+n)    ||
      +n < 0                 ||
      Math.abs(+n) === Infinity ) {
    throw new TypeError(`${n} is invalid`);
  }

  if (n == 0) {
    return [];
  }

  if (!v) {
    v = undefined;
  }

  return iter(0, []);

  function iter(i, arr) {
    if (i === n) {
      return arr;
    }

    arr.push(v);

    return iter(++i, arr);
  }
}
