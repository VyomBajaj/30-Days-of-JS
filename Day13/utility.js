function add(a,b){
    return a+b;
}
let myself={
    name:"Vyom",
    branch:"Cse",
    rollNo:2149,
    greet:function(){
        console.log(`Hello my name is ${myself.name}`);
        
    }
}
export {myself,add};

export default function multiplication(a,b){
    return a*b;
}
export function subtract(a, b) {
    return a - b;
}