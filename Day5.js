//ACTIVITY 1 : FUNCTION DECLARATION

//task 1 : Function to check if a number is even or odd

function check(num) {  
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

let num = 18;
if(check(num)){   
    console.log(number,"is even");
}
else{
    console.log(number,"is odd");
}

//output : 18 is even

//task 2 : function to find square of a number

function sq(a){
    return a*a;  //return the square of input number
}

let a = 4;
console.log("square of",a,"is",sq(a));   //print the square of number

// output : square of 4 is 16


//ACTIVITY 2 : FUNCTION EXPRESSION

//task 3 : funtion to find maximum of two numbers

function findMax(a,b){
    if(a>=b){
        return a;
    }
    return b;
}

let num1 = 24;
let num4 = 36;
console.log("maximum of",num1,"and",num4,"is",findMax(num1,num4));

//output : maximum of 24 and 36 is 36

//task 4 : function to concatenate two strings

function concatenate(str1,str2){
    return str1 + str2;
}
let str1 = "Vyom";
let str2 = " Bajaj";
let result = concatenate(str1,str2);
console.log("concatenated string is :",result);

// output : concatenated string is : Vyom Bajaj


//ACTIVITY 3 : ARROW FUNCTIONS

//task 5 : arrow function to find sum of two numbers

const Sum = (a,b) => {
    return a+b;
}
let b1 = 18;
let b2 = 7;
console.log("sum of",b1,"and",b2,"is :",Sum(b1,b2));

//output : sum of 18 and 7 is : 25;

//task 6 : arrow function to check whether a string contain a perticular character or not

const findChar = (str1,ch) =>{
    let len = str1.length;
    for(let i=0;i<len;i++){
        if(str1[i]==ch){
            return true;
        }
    }
    return false;
}

let ch = 'e';
let string1 = 'table';
if(findChar(string1,ch)){
    console.log("character",ch,"is found in string",string1);
}
else{
    console.log("character",ch,"is not found in string",string1);
}

//output : character e is found in string table



// ACTIVITY 4 : FUNCTION PARAMETER AND DEFAULT VALUES

//task 7 : function takes two parameters and find product and set default value of second parameter

function product(a,b=2){
    return a*b;
}
let c1 = 9;
console.log("On setting default value of second parameter as 2,the product of",c1,"is :",product(c1));

//output : On setting default value of second parameter as 2,the product of 9 is : 18


//task 8 : function that takes person name and age and return greeting

const greet = (name,age=20) =>{
    console.log("Hello, my name is",name,"and I am",age,"years old.");
};

let naming = "Vyom";
greet(naming);

//output : Hello, my name is Vyom and I am 20 years old.


//ACTIVITY 5 : HIGHER ORDER FUNCTIONS

//task 9 : function that take a function and number as perimeter and call that function as many times

const fun = () =>{  //this function will pass as an argument in other function
    console.log("I am a function ");
}

const higherFunction = (number,func) =>{  //higher order function taking a function as a perimeter
    for(let i=1;i<=number;i++){
        func();
    }
}

let num2 = 5;
higherFunction(num2,fun);

/*output : 
I am a function 
I am a function 
I am a function 
I am a function 
I am a function 
*/


//task 10 : function that takes two function as perimeter and apply second function on result of first function

function findCube(a){
    return a*a*a;
}
function findSquare(b){
    return b*b;
}

const highOrder = (num,func1,func2) =>{
    res1 = func1(num);
    res2 = func2(res1);
    return res2;
};

let n = 2;
let final = highOrder(n,findCube,findSquare);

console.log("After applying higher order function on ",n,"which takes two function passed as a perimeter first function double the number and second will find square of it,the result is :",final);

//output : After applying higher order function on  6 which takes two function passed as a perimeter first function double the number and second will find square of it,the result is : 64