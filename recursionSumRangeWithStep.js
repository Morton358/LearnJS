var arr = [];
function rerange(bellow,upper) {
  arr.push(bellow);

  while (arr[arr.length-1]!==upper) {
    return rerange(bellow + 1,upper);
  }

}
function resul(bellow,upper) {
rerange(bellow,upper);
return arr;
}

console.log(resul(5,15));


//console.log(rerange(15,3,-2));


//console.log(rerange(10,0,-1));
