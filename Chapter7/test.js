function a(x) {
    return function b(y) {
        return x + y;
    };
    //return b(x);
}

let aa = a(2);
let bb = a(2);

console.log(aa(2));
console.log(aa(4));
