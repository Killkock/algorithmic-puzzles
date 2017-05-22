// link to the task: https://www.codewars.com/kata/54ca3e777120b56cb6000710

function chained(functions) {
  return function(input) {
    let result = input;
    for (let i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }
    return result;
  }
}
