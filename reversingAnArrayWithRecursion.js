newArr = []
function reverse(array, n) {
  /*
  this function iterates thought Array
  with recursion
  */
	if (n < 0) {
	  console.log(newArr);
	  return newArr;
	}
	console.log(array[n]);
  newArr.push(array[n]);
	reverse(array, n - 1);
}

var arr = [1,2,3,4];
reverse(arr, arr.length - 1);

