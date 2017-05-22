//https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    let num = 0;
    let numToStr = (i).toString()
    for (let j = 0; j < numToStr.length; j++) {
      num += Math.pow(+numToStr[j], j + 1);
    }
    if (num === i)
      result.push(i);
  }
  return result;

}
