// Design an interface that abstracts iteration over a collection of values.
//  An object that provides this interface represents a sequence,
//  and the interface must somehow make it possible for code that uses
//   such an object to iterate over the sequence, looking at the element values
//    it is made up of and having some way to find out when the end
//    of the sequence is reached.
//
// When you have specified your interface, try to write a function logFive
// that takes a sequence object and calls console.log on its first five
// elements—or fewer, if the sequence has fewer than five elements.
//
// Then implement an object type ArraySeq that wraps an array and allows
// iteration over the array using the interface you designed.
//  Implement another object type RangeSeq that iterates over a range of integers
//  (taking from and to arguments to its constructor) instead.

const logFive = (obj) => {
    newArr = obj.slice(0, Math.min(5, obj.length));
    newArr.map( (element) => {
        return console.log(element);
    });
}

function ArraySeq(arr) {
    this.arr = arr;
    return this.arr;
}

function RangeSeq(arr) {
    this.arr = arr;
    return this.arr;
}

RangeSeq.make = function (from, to) {
    const arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }
    return new RangeSeq(arr)
}

console.log(Object.keys(new ArraySeq([1, 2])));
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(RangeSeq.make(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
