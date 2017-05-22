// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
  return [...new Set(string.split(''))].toString().match(/[A-Z]/gi).length >= 26;
}
