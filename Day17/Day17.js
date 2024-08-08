//Task-1
class Node{
    constructor(value,next=null){
        this.value = value,
        this.next = next;
    }
}

let head = new Node(1,new Node(2,new Node(3,new Node(4))));

//Task 2 
class LinkedList{
    add(head,val){
        let temp = head;
        if(temp.next==null){
            temp.next = new Node(val);
        }
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next =  new Node(val);
    }
    remove(head){
        let temp = head;
        while((temp.next).next != null){
            temp = temp.next;
        }
        temp.next = null;
    }
    display(head){
        let temp=head;
        let str = ""
        while(temp!=null){
            str = str + temp.value + " ";
            temp = temp.next;
        }
        console.log(str);
    }
}


let l = new LinkedList();
l.display(head);  //1 2 3 4
l.add(head,2); 
l.display(head);  // 1 2 3 4 2
l.remove(head);
l.display(head);   // 1 2 3 4


//ACTIVITY 2 : STACK

// Task 3 
class Stack{
    constructor(){
        this.top = -1
        this.stack = []
    }
    push(val){
        this.top = this.top+1;
        this.stack[this.top] = val;
    }
    pop(){
        if(this.top==-1){
            console.log("stack is empty");
        }
        else{
            return this.stack[this.top--];
        }
    }
    peak(){
        console.log(this.stack[this.top]);
    }
    display(){
        let i=this.top;
        let str = ""
        while(i>=0){
            str = str + this.stack[i] + " ";
            i--;
        }
        console.log(str);
    }
}

let s = new Stack();
s.push(1);
s.push(8);
s.display();  // 1 8
s.push(2);
s.peak(); //2
s.display();  // 1 8 2
s.pop();
s.display(); // 1 8

// //Task 4 : Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off

let str1 = "Vyom";
let st = new Stack();
for(let i=0;i<str1.length;i++){
    st.push(str1[i]);
}
let rev="";
while(st.top!=-1){
    rev=rev + st.pop();
}

console.log(rev); // moyV

// //ACTIVITY 3: QUEUE

// //Task 5

class Queue{
    constructor(){
        this.front = -1;
        this.rear = -1;
        this.queue = [];
    }
    enqueue(val){
        if(this.front==-1 && this.rear==-1){
            this.front = this.rear = 0;
        }
        else{
            this.rear +=1;
        }
        this.queue[this.rear] = val;
    }
    dequeue(){
        if(this.front==-1 && this.rear==-1){
            console.log("queue is empty");
        }
        else if(this.front==this.rear){
            let r = this.queue[this.rear];
            this.front = this.rear = -1;
            return r;
        }
        else{
            return this.queue[this.front++];
        }
    }
    display(){
        let i=this.front;
        let str="";
        while(i<=this.rear){
            str = str + this.queue[i] + " ";
            i++;
        }
        console.log(str);
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(4);
q.enqueue(9);
q.display(); // 1 4 9
q.dequeue();
q.display();// 4 9

//Task 6 : Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

let p = new Queue();
p.enqueue("1");
p.enqueue("2");
p.enqueue("3");
p.enqueue("4");
p.enqueue("5");
console.log("Pages:");
p.display();

//output : Pages:
//         1   2   3   4   5  


//ACTIVITY 4 : BINARY TREE

//Task7 

class TreeNode{
    constructor(val,r=null,l=null){
        this.value = val;
        this.left = r;
        this.right = l;
    }
}
