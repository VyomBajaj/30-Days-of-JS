//Activity 1 - Template Literals

//Task 1
let name="Vyom";
let age=20;
let str= `My name is ${name} and my age is ${age}`;
console.log(str);
// Output
// My name is Vyom and my age is 20


//Task2
let s2= `My name is Vyom
My age is 10
I study in Nit Kurukshetra Cse Branch`
console.log(s2);            
//Output
// My name is Vyom
// My age is 10
// I study in Nit Kurukshetra Cse Branch

//Activity-2 - Destructuring

//Task-3

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr[0]);
console.log(arr[1]);
//Output
// 1
// 2

//Task-4

const book = {
    title: "Happy Life",
    author: "xyz",
    year: 1960
};
console.log(book.title);
console.log(book.author);
//Output
// Happy Life
// xyz

//Activity-3 Spread and Rest Operators

//Task-5
let arr1=[1,2,3,4,5]
let arr2=[...arr1,6,7,8];
console.log(arr2);
//Output
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]

//Task-6

function allSum(...args){//Use of rest operator
    let sum=0;
    for(let arg of args){
        sum=sum+arg;
    }
    return sum;
}
let array=[1,2,3,4,5];
let sum = allSum(1,2,3,4,5,...array); // Use of spread in spreading the array
console.log(sum);
//Output
//30

//Activity-4 Deafault Parameters

//Task-7
let product=(num1,num2=1)=>{
    let ans=num1*num2;
    return ans;
}
console.log(product(5));
console.log(product(5,2));
//Output
// 5
// 10






