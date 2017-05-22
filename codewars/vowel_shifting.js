// https://www.codewars.com/kata/577e277c9fb2a5511c00001d

function vowelShift(text, n) {
  if (text === null || text === '') {
    return text;
  }
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let positions = [];
  for (let i = 0; i < text.length; i++) {
    if (~vowels.indexOf(text[i].toLowerCase())) {
      let obj = {};
      console.log(text[i])
      obj[text[i]] = i;

      positions.push(obj);
    }
  }

  let aOL = positions.length;
  text = text.split('');
  for (let i = 0; i < aOL; i++) {
    let newPosition = (i + n) % aOL;
    if (newPosition < 0)
      newPosition = aOL + newPosition;
    let letter = Object.keys(positions[i])[0];
    console.log(newPosition);
    let position = Object.keys(positions[newPosition])[0];
    position = positions[newPosition][position]
    text[position] = letter;
  }
  return text.join('');


}
