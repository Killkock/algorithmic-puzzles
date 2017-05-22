// link to the task: https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){

  if (n % 2 === 0 || n < 0) {
    return null;
  }
  let result = '';
  let midPos = Math.ceil(n / 2);

  for (let i = 1; i <= n; i += 2) {
    for (let j = 0; j < midPos + Math.floor(i / 2); j++) {
      if (j >= midPos - Math.ceil(i / 2)) {
        result += '*';
        continue;
      }
      result += ' ';
    }
    result += '\n';
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    for (let j = 0; j < midPos + Math.floor(i / 2); j++) {
      if (j >= midPos - Math.ceil(i / 2)) {
        result += '*';
        continue;
      }
      result += ' ';
    }
    result += '\n';
  }
  return result;
}
