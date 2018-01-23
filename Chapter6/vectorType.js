function Vector (x, y) {
    this.x = x
    this.y = y
}

Vector.prototype.plus = function (someObj) {
    const resX = this.x + someObj.x
    const resY = this.y + someObj.y
    return new Vector(resX, resY)
}

Vector.prototype.minus = function (someObj) {
    const resX = this.x - someObj.x
    const resY = this.y - someObj.y
    return new Vector(resX, resY)
}

Object.defineProperty(Vector.prototype, "length", {get: function () {
    return (Math.abs(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))));
}})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// // → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// // → 5
