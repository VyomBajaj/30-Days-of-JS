const { create } = require("combined-stream");

//Task-1
function outer(){
    let access="Yes";
    function inner(){
        console.log(access)
    }
    inner();
}
outer();

//Output
// Yes

//Task-2
function createCounter(){
    let counter=0;
    function increase(){
        counter=counter+1;
    }
    function display(){
        console.log(counter)
    }
    return {
        "inc":increase,
        "display":display
        }
}
const f1=createCounter();
console.log(f1);

f1.inc();
f1.inc();
f1.display();
//Output
// 2

//Task-3
function createId(){
    let id=2149;
    function inc(){
        id=id+1;
        console.log(id)
    }
    function lastId(){
        console.log(id)
    }
    return {
        "last":lastId,
        "increase":inc
    }
}
let f2 = createId();
f2.last();
f2.increase();
f2.last();

//Task-4
function username(user){
    function greet(){
        console.log(`Welcome ${user},Hope you are Fine`);
    }
    greet();
}
username("Vyom")
//Output
// Welcome Vyom,Hope you are Fine

//Task-6

function keep(){
    let items=[];
    function add(type){
        items.push(type);
        console.log(items);
    }
    function remove(item){
        let index = items.indexOf(item);
        if(index==-1){
            console.log("Item not found");
            
        }
        else{
            items.splice(index,1);
            console.log(items);
        }
    }
    return{
        "add":add,
        "remove":remove
    };
}
let obj1 = keep();
obj1.add("bat");
obj1.remove("ball")
obj1.remove("bat");

//Output
// [ 'bat' ]
// Item not found
// []