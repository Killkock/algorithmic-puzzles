// link to the task: https://www.codewars.com/kata/find-the-unique-string/train/javascript

function findUniq(arr) {
  var finalResult;
  var result;
  var changedArrToOld = {};
  var changedArr = arr.map((el) => {
    if (checkForEmptyString(el)) {
      return '';
    } else {
      return el;
    }
  }).map((el) => {
    return [...new Set(el.toLowerCase().split(''))].filter(el => !!el).sort().join('');
  });


  for (var i = 0; i < arr.length; i++) {
    changedArrToOld[arr[i]] = changedArr[i];
  }

  changedArr.sort();

  result = (changedArr[0] === changedArr[1]) ? changedArr.slice(-1)[0] : changedArr[0];

  for (var x in changedArrToOld) {
    if (changedArrToOld[x] === result) {
      finalResult = x;
      break;
    }
  }

  return finalResult;

  function checkForEmptyString(str) {
    if (str.split(' ').filter(el => !!el).length === 0) {
      return true;
    }

    return false;
  }
}
