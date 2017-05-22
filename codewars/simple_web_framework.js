// https://www.codewars.com/kata/588a00ad70720f2cd9000005

var Router = function() {
  this.routs = {}
  this.bind = function(rout, method, func) {
    if (rout in this.routs) {
      this.routs[rout][method] = func;
    } else {
      this.routs[rout] = {};
      this.routs[rout][method] = func;
    }
  }
  this.runRequest = function(rout, method) {
    if (this.routs[rout] && this.routs[rout][method]) {
      return this.routs[rout][method]();
    } else {
      return 'Error 404: Not Found';
    }
  }


}
