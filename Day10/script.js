//Task-1
let para=document.querySelector(".task1");
let button=document.querySelector(".button-task1")
button.addEventListener('click',()=>{
    para.innerHTML="Text Changed Finally"
});
//Task-2
let image=document.querySelector(".image-toggle");
let toggleButton=document.querySelector('.on-toggle')
toggleButton.addEventListener("dblclick",()=>{
    image.style.display="none";
})
//Task-3
let divChange=document.querySelector(".toChange");
divChange.addEventListener('mouseover',()=>{
    divChange.style.backgroundColor="yellow";
});
//Task-4
divChange.addEventListener('mouseout',()=>{
    divChange.style.backgroundColor="red";
})
//Task-5
let input=document.querySelector('.input');
input.addEventListener('keydown',(e)=>{
    if(e.key===' '){
        console.log("space");
    }
    else{
        console.log(e.key)
    }
})
//Task-6
document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('inputField');
    const displayParagraph = document.getElementById('displayParagraph');

    inputField.addEventListener('keyup', () => {
        displayParagraph.textContent = `Current value: ${inputField.value}`;
    });
});
//Task-7
const form=document.getElementById("task");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const first=document.getElementById("fname").value;
    const last=document.getElementById("lname").value;
    console.log(first,last);
});
//Task-8
const select=document.querySelector('#task8');
select.addEventListener('change',()=>{
    const toDisplay = document.querySelector("#para-select");
    toDisplay.innerHTML = select.value;
})
//Task-9
const itemList = document.getElementById("item-list");
itemList.addEventListener("click",(event)=>{
    if (event.target && event.target.matches("li.list-item")) {
        console.log("Clicked on: " + event.target.textContent);
    }
});
//Task-10
const create = document.querySelector(".create");
create.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.classList='list-item';
    li.innerHTML="I am created";
    document.body.appendChild(li);
    console.log(li)
})
