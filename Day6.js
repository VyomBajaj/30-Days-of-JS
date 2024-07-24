// Activity 1: Array creation and access

// Task 1
const nums = new Array();
for(let i=1;i<=5;i++){
    nums.push(i);
}
console.log(nums);     
//output: [1,2,3,4,5]

//Task 2
const first = nums[0];
const last = nums[nums.length -1];
console.log(`first = ${first} last = ${last}`);      
//output: first = 1 last = 5

// Activity 2: Array Methods

// Task 3
nums.push(6);
console.log(nums);  
//output: [1,2,3,4,5,6]

// Task 4
nums.pop();
console.log(nums);
//output: [1,2,3,4,5]

// Task 5
nums.shift();
console.log(nums);       
//output: [2,3,4,5]

// Task 6
nums.unshift(0);
console.log(nums);        
//output: [0,2,3,4,5]

// Activity 3: Array methods

// Task 7
const double = nums.map((num)=>{
    return num*2;
});
console.log(double);         
//output: [0,4,6,8,10]

//Task 8
const even = nums.filter((num)=>{
    return num%2 == 0;
});
console.log(even);          
//output: [0,2,4]


// Task 9
const sum = nums.reduce((num1,acc)=>{
    return num1+acc;
},0); 
console.log(`sum = ${sum}`);    
//output: sum = 14

// Activity 4: Array iteration

// Task 10
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}                                 
//output: 0 2 3 4 5

// Task 11
nums.forEach(item => {
    console.log(item);
});                               
//output: 0 2 3 4 5

// Activity 5: Multi-dimensional Array

// Task 12
let row = 3;
let col = 3;
let mat = [];
for(let i = 0; i<row;i++){
    mat[i] = [];
    for(let j = 0;j<col;j++){
        mat[i][j] = i+j;
    }
}
console.log(mat);            
// output:  [[0,1,2],[1,2,3],[2,3,4]]

// Task 13
console.log(mat[1][2]);       
//output: 3