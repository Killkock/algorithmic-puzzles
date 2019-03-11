/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isMinus = x < 0;
  let strNum = isMinus ? String(x).slice(1) : String(x);
  let result = '';

  for (let i = strNum.length - 1; i >= 0; i--) {
    result += strNum[i]
  }

  result = isMinus ? -+result : +result;

  return (!isMinus && result <= (Math.pow(2, 31) - 1) || isMinus && result >= (Math.pow(-2, 31))) ? result : 0;
};
