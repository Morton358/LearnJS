var power = function(base, exponent)
 {
	function exponentiation() 
	{
		for (var count = 0; count < Math.abs(exponent); count++)
			result *= base;
		return result;
    }

  var result = 1;
  if (exponent >= 0)
  {
  	exponentiation();
  }
  else 
  {
    return 1/exponentiation();
  }

  
 return result;       
};
console.log(power(2, -2));


