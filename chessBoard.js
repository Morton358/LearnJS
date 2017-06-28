var theSize = Number(prompt('Write a number of the grid your want', ""));
var blank = " ";
var hashTag = "#";
var line = "";
var count = 0;
if (theSize !== null) {
  while (line.length < theSize * 2) {
    if (line.slice(-1) === " ") {
      line += hashTag;
    }
    else {
      line += blank;
    }
  }
    while (count < theSize){
      count += 1;
      if (count % 2 === 0) {
          line = line.slice(1);
            console.log(line);
      }
      else {
          line = " " + line;
          console.log(line);
      }
    }
}
else {
  window.alert('You must write a number!');
}
