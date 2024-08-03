//Activity-1 Basic Error Handling with try catch

//Task-1
function toTry(){
    let ans = 1/0;
    if (!isFinite(ans)) {
        throw new Error("Division by zero");
    }
    return ans;
}
try{
    console.log(toTry())
}
catch(error){
    console.log("Error! Not Possible "+ error.message)
}
//Output
// Error! Not Possible Division by zero

//Task-2
function division(a,b){
    if(b==0){
        throw new Error("Division by zero is not possible")
    }
    return a/b;
}
try{
    division(5,0)
}
catch(error){
    console.log(error.message)
}
//Output
// Division by zero is not possible

//Activity-2 Finally Block

//Task-3
try{
    console.log("trying division by zero");
    let ans = division(5,0);
    console.log(ans);
}
catch(error)
{
    console.log(error.message)
}
finally{
    console.log("It will be exeuted every time")
}
//Output
// trying division by zero
// Division by zero is not possible
// It will be exeuted every time

//Activity-3 Custom Error Objects

//Task-4
class Errors extends Error{
    constructor(msg){
        super(msg);
        this.name="Errors";
    }
}
function division(a,b){
    if(b==0){
        throw new Errors("Custom Error")
    }
    return a/b;
}
try{
    console.log("trying division by zero");
    let ans = division(5,0);
    console.log(ans);
}
catch(error)
{
    console.log(error.message)
}
finally{
    console.log("It will be exeuted every time")
}
//Output
// trying division by zero
// Custom Error
// It will be exeuted every time

//Task-5
class ErrorValidation extends Error{
    constructor(msg){
        super(msg)
        this.name="ErrorValidation";
    }
}
function validateUser(str){
    if(!str){
        throw new ErrorValidation("Please input a valid string")
    }
    
    return "Validation Successful"
}
try
{   
    // let response=validateUser()
    let response2=validateUser("Vyom")
    console.log(response2);
}
catch(error)
{
    console.log(error.message)
}
finally
{
    console.log("Ran succesfully")
}
//Output-1
// Please input a valid string
// Ran succesfully
//Output-2
// Validation Successful
// Ran succesfully

//Activity-4  Error Handling in Promises

//Task-6
let promiseOne = new Promise( (resolve,reject)=>{
    let random =  Math.floor(Math.random()*2)
    console.log(random);
    
    if(!random){
        reject("Promise is rejected")
    }
    resolve("Promise is resolved");
} )
promiseOne
.then( (msg)=>{
    console.log(msg)
})
.catch((error)=>{
    console.log(error)
})

//Output-1
// 1
// Promise is resolved

//Output-2
// 0
// Promise is rejected

//Task-7
let toRes = async function(){
    try{
        let response=await promiseOne
        console.log(response) 
    }
    catch(msg){
        console.log(msg)
    }
}
toRes()
//Output-1
// 1
// Promise is resolved

//Output-2
// 0
// Promise is rejected


//Activity-5 Graceful Error Handling in Fetch

//Task-8
let url="https//abc";
fetch(url)
.then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log("Error Fetching URL ");
})
//Output
// Error Fetching URL

//Task-9
let trytoCatch = async function(){
    try{
        let data =await fetch(url);
        console.log(data)
    }
    catch{
        console.log("Its an error");
    }
}
trytoCatch();
//Output
// Its an error

