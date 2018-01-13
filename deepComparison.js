/*
Deep comparison
The == operator compares objects by identity. But sometimes, you would
prefer to compare the values of their actual properties.
Write a function, deepEqual, that takes two values and returns true only
if they are the same value or are objects with the same properties whose
values are also equal when compared with a recursive call to deepEqual.
To find out whether to compare two things by identity
(use the === operator for that) or by looking at their properties,
you can use the typeof operator. If it produces "object" for both values,
you should do a deep comparison. But you have to take one silly exception
 into account: by a historical accident, typeof null also produces "object".
*/

function deepEqual(obiekt1, obiekt2) {
  if (typeof obiekt1 == typeof obiekt2 && typeof obiekt1 == "object") {
    if (Object.keys(obiekt1).length === Object.keys(obiekt2).length) {
      if (obiekt1.object === obiekt2.object) {
        if (typeof (obiekt1.here) != "object" &&
        typeof (obiekt2.here) != "object") {
          if (obiekt1.here === obiekt2.here) {
            return true;
          }
          else {
            return false;
          }
        }
        else if (typeof (obiekt1.here) == "object" &&
        typeof (obiekt2.here) == "object") {
          return deepEqual(obiekt1.here, obiekt2.here);
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
