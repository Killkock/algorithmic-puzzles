// link to the task: https://www.codewars.com/kata/camelcase-method/train/javascript

String.prototype.camelCase = function(){
  if (this.length === ' ') {
    return this;
  }

  var string = this.split(' ').filter((el) => !!el);

  for (var x = 0; x < string.length; x++) {
    string[x] = string[x][0].toUpperCase() + string[x].slice(1).toLowerCase();
  }

  return string.join('');
}
