/*Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise. */


String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
};
  

console.log(String.prototype.digit('7'))

  //return true || false
//check to see if object is digit
//