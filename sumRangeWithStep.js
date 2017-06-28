function rerange(bellow,upper,step){
    var arr=[];
	for (i=0; arr[arr.length -1]!==upper; i++){
      if (arr.length!==0){
        	if (rerange.arguments.length < 3){
              arr.push(arr[arr.length-1] + 1);
            }
        	else {
              arr.push(arr[arr.length-1] + step);
            }
        }
        else{
            arr.push(bellow);
        }
    }
    return arr;
}

console.log(rerange(5,15,2));


console.log(rerange(10,0,-1));


console.log(rerange(11,22));