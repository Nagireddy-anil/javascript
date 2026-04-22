



// execution context 
// it has two types 
// 1. global execurion context
//2. function execution context

/*var a=3;
var b=4;
function add(num1 , nnum2){
    var ans=num1+nnum2;
    return ans;
}
let add1= add(a,b);
let add2=add(5,6);
console.log(add1);
console.log(add2);*/

/*function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
    console.log("call dstack");
    
}
one();*/
console.log(msg);
var msg ="ello"
greet();
function greet(){
    console.log(msg,"happy new year");
}