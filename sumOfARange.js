function range(bellow, upper) {
  var arr = [];
  for (var i = 0; i<upper; i++)
    if (i === 0) {
      arr.push(bellow);
    }
    else {
      arr.push(bellow + i);
    }
  return arr;
}


console.log(range(1, 10));
