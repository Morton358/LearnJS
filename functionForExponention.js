var power = function(base, exponent) {
  var result = 1;
  if (exponent >= 0){
    for (var count = 0; count < exponent; count++)
      result *= base;
  }
  else {
    for (var count = 0; count < Math.abs(exponent); count++)
      result *= base;
    result = 1/result;
  }
  return result;
};
console.log(power(2, -2));
