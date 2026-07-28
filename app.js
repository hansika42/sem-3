//function in js:block of code 
//syntax :
//function fname(){
//}
//fname();
/*function add (num1,num2) {
    console.log(num1+num2);
    return num1 + num2;
}
add(2,1);
//arrow functions
//syntax:()=>{}
const add=()=>{
    console.log("arrow function")
}
add();
const add=(num1,num2)=>{
    return num1 + num2;
}
console.log(add(2,1));*/

/*function addNum(){
    console.log(arguments);
}
addNum(2,1,2,4,3,4);*/

//Node.js:runtime environment to run js code outside the browser 

//synchronous and asynchronous programming 
//syn imediately(one after another, next line waits for the previous one) 
// asyn m kuch task time lete h to tb tk baki run ho jate h

//synchronous 
/*function hello (){
    console.log("hello,world!");
}
hello();
console.log("this is synchronous programming");*/

//asynchronous programming : code is executed line by line, but some
/*const hello = () => {
    setTimeout(() => {
        console.log("hello, world!");
    },2000);
}
hello();
console.log("this is asynchronus pro");*/

//callback, promises, async/await 
//call back passing function within function 
/*function add(n1, n2, callback){
    console.log(n1 + n2);
    callback();
}

let a = 10;
let b = 20;

add(a, b, sayHi);
add(a, b, hello);

function sayHi(){
    console.log("this is a callback function");
}

function hello(){
    console.log("hello, world!");
}

// Callback example
function display(callback){
    console.log("welcome to abes");
    callback();
}

display(learn);

function learn(){
    console.log("learning FSD in cse-21");
}*/

//promises:object
//promise way 1
const promiseone= new Promise((resolve, reject)=>{
    console.log("promise done");
    resolve("operation successful");
    let success=true;
    if (success){
        
    }
})
