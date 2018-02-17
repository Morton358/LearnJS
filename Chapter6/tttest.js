// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const arr = a.filter((el) => el % 2);
// console.log(arr);
//
// ///////////////////////////////////////////////////
//
// function writeToValue () {
//     var a = arguments[0];
//     console.log(a);
// }
// writeToValue(5);
//
// ////////////////////////////////////////////////////////
//
// function f(x) {
//   "use strict"; // для браузеров с поддержкой строгого режима
//
//   arguments[0] = 5;
//   alert( x ); // не 5, а 1! Переменная "отвязана" от arguments
// }
//
// f(1);
//
// /////////////////////////////////////////////////////////////////
function x(){
    let a = arguments[0]
    console.log(a);
}

x(5);

function y(...args){
    let a = args[0]
    console.log(a);
}

y(10);
