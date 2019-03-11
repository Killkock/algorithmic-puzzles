// https://www.codewars.com/kata/weight-for-weight/train/javascript

function orderWeight(string) {
    let numbersArray = string.split(' ');

    numbersArray.sort((a, b) => {
      const aWeight = getNumbersWeight(a);
      const bWeight = getNumbersWeight(b);
      return (aWeight === bWeight ? a.localeCompare(b) : aWeight - bWeight);
    })

    return numbersArray.join(' ');
}

function getNumbersWeight(num) {
  return num.split('').reduce((acc, el) => acc + +el, 0);
}
