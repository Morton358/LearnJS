/*Objects, as generic blobs of values, can be used to build all sorts of
data structures. A common data structure is the list (not to be confused
with the array). A list is a nested set of objects, with the first object
holding a reference to the second, the second to the third, and so on.

A nice thing about lists is that they can share parts of their structure.
For example, if I create two new values {value: 0, rest: list}
and {value: -1, rest: list} (with list referring to the variable
defined earlier), they are both independent lists, but they share the
structure that makes up their last three elements. In addition,
the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like
the previous one when given [1, 2, 3] as argument, and write a listToArray
function that produces an array from a list. Also write the helper functions
 prepend, which takes an element and a list and creates a new list that adds
  the element to the front of the input list, and nth, which takes a list
  and a number and returns the element at the given position in the list,
  or undefined when there is no such element. */


function arrayToList(arr) {
  if (arr.length == 1) {
    return {value: arr[0], rest: null};
  }
  else {
    return {value: arr[0], rest: arrayToList(arr.slice(1))};
  }
}



function listToArray(obj) {
  //var arr = [];
  if (obj.rest === null) {
    return [obj.value];
    //arr.push(obj.value);
  }
  else {
    return [].concat.apply([], [obj.value, listToArray(obj.rest)]);
    //arr.push(obj.value)
    //arr.push(listToArray(obj.rest));
  }
  //var mergedArray = [].concat.apply([], arr);
  //return mergedArray;
}


function prepend(elem, list) {
  return {value: elem, rest: list};
}


function nth(objj, pos) {
  /*var list = listToArray(objj);
  var res = [list[pos]];
  return res;*/

  var res = objj.value;
  while (pos !== 0) {
    return nth(objj.rest, pos - 1);
  }
  return res;
}




console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
