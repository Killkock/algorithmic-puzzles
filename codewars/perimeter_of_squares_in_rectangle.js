// https://www.codewars.com/kata/559a28007caad2ac4e000083

function perimeter(n) {
    return loopFibSum(n + 1) * 4;
}

function loopFibSum(n) {
  var firstPrevSum = 1;
  var secondPrevSum = 1;
  var currentSum = 0;
  var fibSum = 2;

  if (n <= 2) {
    fibSum = n;
  } else {
    for (var i = 3; i <= n; i++) {
      var currentSum = firstPrevSum + secondPrevSum;
      fibSum += currentSum
      secondPrevSum = firstPrevSum;
      firstPrevSum = currentSum;
    }
  }

  return fibSum;
}
