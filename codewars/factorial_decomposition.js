function decomp(n) {
  const primes = {}
  
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      addProp(primes, i);
    } else {
      decomposeNum(i, primes);
    }
  }

  return formatResult(primes);
}


function isPrime(num) {
  if (num === 2) return true;
  
  let halfNum = Math.ceil(Math.pow(num, 0.5));
  
  for (let i = 2; i <= halfNum; i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}

function addProp(obj, prop) {
  if (obj[prop]) {
    obj[prop]++;
  } else {
    obj[prop] = 1;
  }
}

function decomposeNum(num, accumulator) {
  let result = num;
    
    for (let i = 2; i <= result; i++) {
      while (result % i === 0) {
        result = result / i;
        addProp(accumulator, i);
      }
    }
}

function formatResult(result) {
  var resultKeys = Object.keys(result);
  var resultArray = resultKeys.map(function(el) {
    var degree = result[el];
    return degree > 1 ? `${el}^${result[el]}` : el;
  })

  return resultArray.join(' * ');
}
