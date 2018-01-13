function checkPalindrome(inputString) {
    if (inputString.length == 1) {
        return true;
    }
    else if (inputString.length <= 100000 && inputString.length > 1) {
        var reverseString = "";
        for (var i = inputString.length -1; i >= 0; i--) {
            reverseString += inputString[i];
        }
        for (var j = 0; j < inputString.length; j++) {
          if (inputString[j] !== reverseString[j]) {
            return false;
          }
        }
        return true;
    }
    else {
        return false;
    }
}

console.log(checkPalindrome("aabaa"), '\n',
checkPalindrome("abaaa"), '\n',
checkPalindrome("a"));
