// link to the task: https://www.codewars.com/kata/58afce23b0e8046a960000eb

function withdraw(n) {
  let sum = 0;
  let result = [0, 0, 0];
  let bills = [100, 50, 20];

  while (sum + bills[2] <= n) {
    sum += bills[2]
    result[2]++;
  }

  while (((n - sum) % 50) !== 0) {
    sum -= bills[2];
    result[2]--;
  }

  while (sum !== n) {
    sum += 50;
    result[1]++;
  }

  while (result[2] >= 5 || result[1] >= 2) {
    if (result[2] >= 5) {
      result[2] -= 5;
      result[0]++;
    }

    if (result[1] >= 2) {
      result[2] -=5;
      result[0]++;
    }
  }

  return result;
}
//   console.log(isCorrect(n, bills))
//   for (let i = 0; i < result.length; i++) {
//     if (bills[i] > n || (i === 1 && ((n % bills[i]) % (bills[i + 1]) !== 0)))
//       continue;


//     result[i] = Math.floor(n / bills[i]);
//     n %= bills[i];
//   }
//   return result;

// }

// function isCorrect(n, bills) {
//   return (((n % bills[0]) % bills[1]) % bills[2]) === 0;
// }
