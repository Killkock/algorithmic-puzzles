/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;

  for (let i = 0, len = prices.length; i < len; i++) {
    let num = prices[i];
    for (let j = 0, len2 = len - i - 1; j < len2; j++) {
      let secNum = prices[i + 1 + j];
      if (secNum - num > max) max = secNum - num;
    }
  }

  return max;
};
