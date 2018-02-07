// List class
// Rewrite the list data structure from the exercises in Chapter 4 as a class.
// Give List objects their old value and rest properties, but also a toArray
// method and a length getter that returns the length of the list.
// Make fromArray a static method on the List constructor.
//
// In order for lists to work as a class with methods, we can no longer represent
//  the empty list as null, but have to create a special instance of our
//   class that acts as the empty list placeholder,
//   and compare with that instance, instead of null, when checking
//   if we’ve reached the end of a list.
//    Store this instance in List.empty (a static property).

//////////////
// sol#1:
/////////////
class List {
    constructor(value, rest){
        this.value = value;
        this.rest = rest;
    }
    get length() {
        let length = 0;
        for (let list = this; list != List.empty; list = list.rest) {
          length++;
        }
        return length;
    }
    static fromArray(arr) {
        if (arr.length == 1) {
          return new List(arr[0], null);
        }
        else {
          return new List(arr[0], List.fromArray(arr.slice(1)));
        }
    }
    toArray () {
        if (this.rest == null) {
          return [this.value];
        }
        else {
          return [].concat.apply([], [this.value, this.rest.toArray()]);
        }
    }
}
List.empty = new List(undefined, undefined);

console.log(List.fromArray([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(List.fromArray([10, 20, 30]).toArray());
// → [10, 20, 30]
console.log(new List(2, List.empty).length);
// → 1


//////////////
// sol#2:
/////////////

// class List {
//   constructor(value, rest) {
//     this.value = value;
//     this.rest = rest;
//   }
//
//   toArray() {
//     let array = [];
//     for (let list = this; list != List.empty; list = list.rest) {
//       array.push(list.value);
//     }
//     return array;
//   }
//
//   get length() {
//     let length = 0;
//     for (let list = this; list != List.empty; list = list.rest) {
//       length++;
//     }
//     return length;
//   }
//
//   static fromArray(array) {
//     let list = List.empty;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = new List(array[i], list);
//     }
//     return list;
//   }
// }
//
// List.empty = new List(undefined, undefined);
//
// console.log(List.fromArray([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(List.fromArray([10, 20, 30]).toArray());
// // → [10, 20, 30]
// console.log(new List(2, List.empty).length);
// // → 1
