// link to the task: https://www.codewars.com/kata/556b85b433fb5e899200003f

function mixedFraction(s){
  console.log(s)
  let nums = s.split('/');
  let first = +nums[0];
  let second = +nums[1];

  if (second === 1)
    return String(first);

  if (second === 0)
    throw new Error('ZeroDivisionError');

  if (first % second === 0)
    return String(first / second);



  let integer = parseInt(first/second);
  if (integer === 0) {
    if ((first < 0 || second < 0) && !(first < 0 && second < 0)) {
      first = -Math.abs(first);
      second = Math.abs(second);
    } else {
      first = Math.abs(first);
      second = Math.abs(second);
    }
  } else {
    first = Math.abs(first);
    second = Math.abs(second);
  }

  first = first % second

  let lowestCommon = 2;

  for (let i = 2; i < Math.max(first, second); i++)
    if (first % i === 0 && second % i === 0)
      lowestCommon = i;

  while (first % lowestCommon === 0 && second % lowestCommon === 0) {
    first /= lowestCommon;
    second /= lowestCommon;
  }

  return (integer === 0) ? `${first}/${second}` : `${integer} ${first}/${second}`;

}
