/* Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.*/

///////

var result = 0;
function countBs(str){
	for (var i=0; i<=str.length; i++) {
		if (str.charAt(i) === "B") {
			result++
		}
	}
	return (result);
}

//console.log(countBs("BBCbbhgfhB"));




var result = 0;
function countChar(str, letter){
	for (var i=0; i<=str.length; i++) {
		if (str.charAt(i) === letter) {
			result++
		}
	}
	return (result);
}
console.log(countChar("kakkerlak", "k"));
