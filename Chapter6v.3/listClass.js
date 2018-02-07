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
