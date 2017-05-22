// link to the task: https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (sum(arr.slice(0, i)) === sum(arr.slice(i + 1))) {
      return i;
    }
  }
  return - 1;
}

function sum(arr) {
  return arr.reduce( (acc, el) => acc + el);
}
