// link to the task: https://js.checkio.org/mission/brackets/

function brackets(exp) {
  var pureBrackets = exp.match(/[\{\}()\[\]]/g);

  if (!pureBrackets) {
    return true;
  }

  var bracketsList = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  var isCorrect = true;
  var result = pureBrackets.reduce(function(acc, el) {
    if (bracketsList[el] === undefined) {
      if (bracketsList[acc[0]] === el) {
        acc.shift();
      } else {
        isCorrect = false;
      }
    } else {
      acc.unshift(el);
    }

    return acc;

  }, []);

  if (result.length !== 0) {
    isCorrect = false;
  }

  return isCorrect;
}
