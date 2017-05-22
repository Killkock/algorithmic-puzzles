// link to the task: https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
  if (array1 === null || array2 === null) {
      return false;
  }
  let sortedArr1 = array1.slice().sort( (a, b) => a - b);
  let sortedArr2 = array2.slice().sort( (a, b) => a - b);

  sortedArr1 = sortedArr1.map( el => el * el );
  console.log(sortedArr1);
  console.log(sortedArr2);
  for (let i = 0; i < sortedArr1.length; i++) {
      console.log(sortedArr1[i], sortedArr2[i])
      if (sortedArr1[i] !== sortedArr2[i]) {
          return false;
      }
  }
  return true;
}
