// link to the task: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  console.log(str)
  let words = str.split(' ');
  return words.map( el => reverse(el) ).join(' ');

}

function reverse(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  console.log(result)
  return result;
}
