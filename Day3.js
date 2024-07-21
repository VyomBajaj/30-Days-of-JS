//Activity 1 if-else statement
//Task 1 check if number is positive/negative or zero
let num=18;
if(num>0){
    console.log(num," is a positive number");
}
else if(num <0)
{
    console.log(num," is a negative number");
}
else{
    console.log(num, " is zero");
}
//check for negative
num=-18;
if(num>0){
    console.log(num," is a positive number");
}
else if(num <0)
{
    console.log(num," is a negative number");
}
else{
    console.log(num, " is zero");
}
//check if num is zero
num=0;
if(num>0){
    console.log(num," is a positive number");
}
else if(num <0)
{
    console.log(num," is a negative number");
}
else{
    console.log(num, " is zero");
}
//Task 2 check if a person is eligible to vote or not
// eligible
let age=18;
if(age>=18)
{
    console.log("you can vote because ur age is ",age);
}else{
    console.log("you cannot vote because ur age is less than 18",age);
}
// not eligible
age=9;
if(age>=18)
 {
    console.log("you can vote because ur age is ",age);
}else{
     console.log("you cannot vote because ur age is less than 18",age);
}
//Activity 2
//Task three find largest among three numbers using nested if-else if-else 
let num1=12;
let num2=9;
let num3 =71;
if(num1>num2)
{
    if(num1>num3)
    {
        console.log(num1," is the largest among three numbers:",num1,num2,"and",num3);
    }
    else{
        console.log(num3,"is the largest among all three",num1,num2,"and",num3);
    }
}
else
{
    if(num2>num3)
    {
        console.log(num2," is the largest among three numbers:",num1,num2,"and",num3);
    }
    else{
        console.log(num3," is the largest among three numbers:",num1,num2,"and",num3);
    }
}
//Activity 3:
//Task 4- find the day of the week using switch case
let today=new Date;
let val=today.getDay();
switch(val)
{
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");        
}
//Task 5- calculate the grade
let marks=89;
switch(Math.floor(marks))
{
    case 10:
        console.log("Grade = A+");
        break;
    case 9:
        console.log("Grade = A");
        break;
    case 8:
        console.log("Grade = B");
        break;  
    case 7:
        console.log("Grade = C");
        break;   
    case 6:
        console.log("Grade = D") ;  
        break;
    case 5:
        console.log("Grade = E");
        break;          
    default:
        console.log("Grade is F");       
}
//Activity 4: ternary operator 
//Task 6-check a number is odd/even using ternary operator
let number=34;
(number%2==0)?console.log(number," is even"):console.log(number,"is odd");
//Activity 5 
//Task 7: check if a year is leap/not
let year=4234;
if((year % 4 === 0 && year %100 !== 0 )||(year % 400 === 0))
{
    console.log(year," is a leap year");
}
else{
    console.log(year," is a not leap year");
}