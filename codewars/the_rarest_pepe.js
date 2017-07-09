// link to the task: https://www.codewars.com/kata/the-rarest-pepe/train/javascript

function findRarestPepe(pepes) {
  var pepesFrequency = {};
  var result = [];

  for (var i = 0; i < pepes.length; i++) {
    if (!pepesFrequency[pepes[i]]) {
      pepesFrequency[pepes[i]] = 1;
    } else {
      pepesFrequency[pepes[i]] += 1;
    }
  }

  var frequency = Object.keys(pepesFrequency).map(function(key) {
    return pepesFrequency[key];
  })

  var min = Math.min.apply(null, frequency);

  if (min >= 5) {
    return 'No rare pepes!';
  }

  for (var key in pepesFrequency) {
    if (pepesFrequency[key] === min) {
      result.push(key);
    }
  }

  result.sort();

  if (result.length === 1) {
    return result[0];
  } else {
    return result;
  }
}
