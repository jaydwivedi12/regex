// var n = 100;
// var i = 1;
// while (i <= n) {

//     if (i == n/2) {
//         i++;
//         continue;
//     }
//      if(i%2!=0)
//     console.log(i + " odd");
//     else
//     console.log(i + " even");
//     i++;
// }

// let a=parseInt(Math.random()*255)
// let b=parseInt(Math.random()*255)
// let c=parseInt(Math.random()*255)
// console.log(`a is ${a} b is ${b} c is ${c}`);

// types of function1️💻
// 1.naming -function having name  and keyword
// 2.anonoymous function  no need function keyword
// 3.fat arrow function  no need function and keyword

// naming function 😛

// function add(a,b){
//     a=10;
//     b=20;
//     return a+b;
// }
// let num=add(10,20)
// console.log(num)

//anonymous function😁


(function(a, b) {
    console.log(a + b);
})(10,20);

// add(2, 3); 

//fat arrow function👌

((a,b)=>{
    console.log(a+b)
})(100,300);
 
