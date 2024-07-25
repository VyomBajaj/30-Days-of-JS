//Activity 1 - Object Creation and access

//Task1
let obj =new Object();
obj={
    title:"Happy Life",
    author:"xyz",
    year:2004    
};
console.log(obj);
//Output   { title: 'Happy Life', author: 'xyz', year: 2004 }

//Task2
console.log(obj.author)
console.log(obj.title)
// //Output  xyz
//         Happy Life


//Activity 2: Object Methods

//Task 3
obj.greet=function(){
   return "Hello " + obj.author;
}
console.log(obj.greet());
//Output
//Hello xyz

//Task 4
changeYear= function(year){
    obj.year=year;
}
changeYear(2005);
console.log(obj.year);
//Output 2005

//Activity-3 - Nested Objects

//Task 5

library={
    name:"MahaVidyalya",
    book:[obj]
};
console.log(library)
//Output
// {
//     name: 'MahaVidyalya',
//     book: [
//       {
//         title: 'Happy Life',
//         author: 'xyz',
//         year: 2005,
//         greet: [Function (anonymous)]
//       }
//     ]
//   }

//Task-6

console.log(library.name);
library.book.forEach(element => {
    console.log(element.title);
});
//Output
// MahaVidyalya
// Happy Life


//Activity-4 The this keyword

//Task-7

const book = {
    title: "Happy Life",
    author: "xyz",
    year: 1960,
    getTitleAndYear: function(str) {
        return `${str} ${this.title} was published in ${this.year}`;
    }
};
console.log(book.getTitleAndYear("Hello"))
//Output:
// Hello Happy Life was published in 1960

//Activity-5

//Task-8
for(let key in obj){
    console.log(`The key is ${key} and its value is ${obj[key]}`  )
}
//Output
// The key is title and its value is Happy Life
// The key is author and its value is xyz
// The key is year and its value is 2005
// The key is greet and its value is function(){
//    return "Hello " + obj.author;
// }

//Task-9

console.log(Object.keys(obj));
console.log(Object.values(obj));

//Output
// [ 'title', 'author', 'year', 'greet' ]
// [ 'Happy Life', 'xyz', 2005, [Function (anonymous)] ]