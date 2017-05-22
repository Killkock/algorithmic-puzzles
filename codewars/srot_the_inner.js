// https://www.codewars.com/kata/5898b4b71d298e51b600014b

function sortTheInnerContent(words) {
  console.log(words);
  words = words.split(' ');
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1) {
      result.push(words[i])
      continue
    }
    let word = words[i].split('');
    let descend = word.slice(1, -1).sort( (a, b) => b > a);
    result.push(`${word[0]}${descend.join('')}${word.slice(-1)[0]}`)
  }

  return result.join(' ');
}
