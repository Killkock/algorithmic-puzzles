// link to the task: https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h,  bounce,  window) {

  if (bounce === 1 || h <= window || arguments.length < 3 || bounce < 0 || window < 0 || h < 0)
    return -1;

  let result = 1;
  h *= bounce;
  while (h > window) {
    h *= bounce;
    result += 2;
  }
  return result;
}
