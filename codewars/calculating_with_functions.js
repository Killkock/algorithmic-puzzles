// link to the task: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero() {
  return checkForNumber(arguments, 0)
}
function one() {
  return checkForNumber(arguments, 1)
}
function two() {
  return checkForNumber(arguments, 2)
}
function three() {
  return checkForNumber(arguments, 3)
}
function four() {
  return checkForNumber(arguments, 4)
}
function five() {
  return checkForNumber(arguments, 5)
}
function six() {
  return checkForNumber(arguments, 6)
}
function seven() {
  return checkForNumber(arguments, 7)
}
function eight() {
  return checkForNumber(arguments, 8)
}
function nine() {
  return checkForNumber(arguments, 9)
}

function plus() {
  return checkForSign('+', arguments[0]);
}
function minus() {
  return checkForSign('-', arguments[0]);
}
function times() {
  return checkForSign('*', arguments[0]);
}
function dividedBy() {
  return checkForSign('/', arguments[0]);
}

function checkForSign(sign, number) {
  return [sign, number];
}


function checkForNumber(args, number) {
  if (args.length === 0) {
    return number;
  }
  console.log(number, args[0]);
  if (args[0][0] === '+') {
    return number + args[0][1];
  } else if (args[0][0] === '-') {
    return number - args[0][1];
  } else if (args[0][0] === '*') {
    return number * args[0][1];
  } else {
    return number / args[0][1];
  }


}
