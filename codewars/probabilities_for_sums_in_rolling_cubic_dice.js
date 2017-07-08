// link to the task: https://www.codewars.com/kata/probabilities-for-sums-in-rolling-cubic-dice/train/javascript

function rolldiceSumProb(sum, diceN){
  var args = [];
  var result;
  var amountOfVariants = Math.pow(6, diceN);

  callManyTimes(diceN, addArgsToList);

  result = args.reduce(function(acc, el) {
    if (arrSum(el) === sum) {
      acc++;
    }

    return acc;
  }, 0);

  return result / amountOfVariants;

  function callManyTimes(maxIndices, func) {
      doCallManyTimes(maxIndices, func, [], 0);
  }

  function doCallManyTimes(maxIndices, func, args, index) {
    if (maxIndices === 0) {
      func(args);
    } else {
      var rest = maxIndices - 1;
      for (var i = 1; i <= 6; i++) {
        var newArgs = args.slice();
        newArgs.push(i);
        doCallManyTimes(rest, func, newArgs, index + 1);
      }
    }
  }

  function addArgsToList(arr) {
    args.push(arr);
  }

  function arrSum(arr) {
    return arr.reduce(function(acc, el) {
      return acc + el;
    }, 0);
  }
}
