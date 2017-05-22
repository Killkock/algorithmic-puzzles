// link to the task: https://www.codewars.com/kata/58ad388555bf4c80e800001e

function cutTheRopes(a) {
  let arrayOfResults = [];
  while (a.length > 0) {

    let result = 0;
    a = a.filter( function(el) {
      if (el !== 0) {
        result++;
        return true;
      }
    });
    arrayOfResults.push(result);
    let min = Math.min.apply(null, a);

    a = a.map( el => el - min);

  }

  return arrayOfResults.slice(0, -1);

}
