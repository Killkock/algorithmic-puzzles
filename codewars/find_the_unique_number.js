// link to the task: https://www.codewars.com/kata/find-the-unique-number-1/train/javascript

function findUniq(arr) {
  var result;
  arr.sort((a, b) => a - b);
  result = (arr[0] === arr[1]) ? arr.slice(-1)[0] : arr[0];

  return result;
}
