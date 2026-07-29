/*console.log("hello");
let name = "hansika";
console.log (name);
if (true){
    console.log("hello");
}
for (let i = 1; i<=5; i++){
    console.log("i hate commitments");
}
let i = 10;
do{
    console.log(i);
    i++;
}
while (i<10);
let family = ["hansika","surya","vipin","neelam"];

for (let members of family){
    console.log(members);
}
let numbers=[10, 20, 30, 40];

for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
function sum (a,b){
    console.log(a+b);
}
sum (4,5);
sum (2,3);
function sum (a,b){
    console.log(a*b);
}
sum (2,4);
windows.alert("alert");
*/
// arrays 
let arr = [10,20,30,40,50];
//console.log (arr[3]);
console.log (typeof arr);
arr.push(60);
//arr.push(70);
//arr.pop();
//arr.unshift(0);
let x= arr.slice(1,4);
console.log (x);
/*let arr1 = [1,2,3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);*/

//map and foreach
let nums = [1,2,3];

let a = nums.forEach((n) => n + 10);//arrow function is used 

let b = nums.map((n) => n + 10);

console.log(a);
console.log(b);