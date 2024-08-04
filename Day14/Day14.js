//Activity 1 Classes

//Task-1
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
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








