//Activity 1 Classes

//Task-1
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.firstName = "firstName";
        this.lastName = "lastName"
    }
    greet(){
        return `Hello ${this.name}, Have a nice day`
    }
    changeAge(newAge){
        this.age=newAge;
    }
    static greeting(){
        return "Hello,Everyone"
    }
    fullName(){
        let response = `Full name is ${this.firstName} ${this.lastName}`
        return response;
    }
    setFullname(first,last){
        this.firstName=first;
        this.lastName=last;
    }
}
let p1 = new Person("Vyom",20)
console.log(p1.greet());
//Output
// Hello Vyom, Have a nice day

//Task-2
p1.changeAge(21);
console.log(p1.age)
//Output
//21

//Task-3
class Student extends Person {
    static #count=0;
    constructor(studentId,name,age){
        super(name,age);
        this.studentId=studentId;
        Student.#count++;
    }

    greet(){
        return `Hello ${this.name} this is the new message`
    }
    static totalStudents(){
        return Student.#count;
    }
}
let s1 = new Student(2149,"Vyom",20)
console.log(s1.name);
console.log(s1.studentId);
console.log(s1.age);
console.log(s1.greet());
//Output
// Vyom
// 2149
// 20
// Hello Vyom this is the new message

//Task-4
//Done above

//Task-5
let ans=Person.greeting()
console.log(ans);
//Output
// Hello,Everyone

//Task-6
console.log(Student.totalStudents());
//Output
//1
let s2 = new Student(1825,"Kavish",17)
console.log(Student.totalStudents());
//Output
//2

//Task-7
console.log(p1.fullName());
//Output
// Full name is firstName lastName

//Task-8
p1.setFullname("Vyom","Bajaj");
console.log(p1.fullName());
//Output
// Full name is Vyom Bajaj

//Task-9
class Account{
    #balance;
    constructor(balance){
        this.#balance=balance
    }
    withdraw(amount){
        if(amount>this.#balance){
            console.log("Balance is less than given amount Can't Withdraw")
        }
        else{
            this.#balance=this.#balance-amount;
            console.log("Withdrawn Successfully !!")
        }
    }
    deposit(amount){
        this.#balance=this.#balance+amount;
        console.log("Deposited Successfully")
    }
    showBalance(){
        let ans=this.#balance;
        console.log(`Your remaining balance is ${ans}`)
    }
}
let user1 = new Account(1290);
user1.showBalance();
//Your remaining balance is 1290
user1.deposit(10);
//Deposited Successfully
user1.showBalance();
//Your remaining balance is 1300
user1.withdraw(50);
//Withdrawn Successfully !!
user1.showBalance();
// Your remaining balance is 1250
user1.withdraw(1300);
//Balance is less than given amount Can't Withdraw
user1.showBalance();
//Your remaining balance is 1250











