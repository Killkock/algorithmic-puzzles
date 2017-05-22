// https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(names){
  let namesList = [];
  for (let i = 0; i < names.length; i++) {
    for (key in names[i]) {
      namesList.push(names[i][key]);
    }
  }
  namesList = namesList.join(', ').split('');
  namesList[namesList.lastIndexOf(',')] = ' &';
  return namesList.join('');
}
