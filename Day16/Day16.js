//Task-1
let fact = (n)=>{
    if(n==1){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(5))
//Output 120

//Task-2
let fibo = (n)=>{
    if(n==1 || n==2){
        return 1;
    }
    return fibo(n-1)+fibo(n-2);
}
console.log(fibo(5)); //Output-5
console.log(fibo(8)); //Output-2

//Task-3
let sum=(arr,i,n,ans)=>{
    if(i==n-1) {
        console.log(ans+arr[i]);
        return;
    }
    ans=ans+arr[i]
    sum(arr,i+1,n,ans)
}
let arr=[1,2,3,4,5]
let n=arr.length;
let ans=0;
sum(arr,0,n,ans);
//Output - 15

//Task-4
let findMax = (arr,i,n,maxi)=>{
    if(i==n) {
        return maxi;
    }
    if(maxi<arr[i]){
        maxi=arr[i];
    }
    return findMax(arr,i+1,n,maxi);
}
console.log(findMax(arr,0,n,arr[0]));
//Output - 5

//Task-5
let swap = (str,i,j)=>{
    let arr = str.split('');
    if (i >= j) return arr.join('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return swap(arr.join(''), i + 1, j - 1);
}
console.log(swap("Vyom",0,3));
//Output moyV

//Task-6
let check = (str,i,j)=>{
    if(i>=j) return true;
    if(str[i]!=str[j]) return false;
    return check(str,i+1,j-1);
}
console.log(check("abcba",0,4))
//Output - True
console.log(check("Vyom",0,3))
//Output - False

//Task-7
let bfs = (arr,s,e,target)=>{
    let mid = Math.floor(s + (e - s) / 2);
    if(s>=e){
        return -1;
    }
    if(target==arr[mid]) return mid;
    if(target<arr[mid]) return bfs(arr,s,mid-1,target)
    if(target>arr[mid]) return bfs(arr,mid+1,e,target)
}
let arr2=[1,3,4,6,8]
let e = arr.length - 1 ;
console.log(bfs(arr2,0,e,6));
//Output - 3

//Task-8
let occ = (arr,i,n,target,count)=>{
    if(i==n) return count;
    if(arr[i]==target){
        count++;
    }
    return occ(arr,i+1,n,target,count)
}
let arr3=[1,3,6,6,8]
let size= arr3.length
console.log(occ(arr3,0,size,6,0));
//Output-2

//Task-9
let inord = (arr,i)=>{
    if(i>=arr.length || arr[i]===undefined) return ;
    let leftChild = 2*i+1;
    let rightChild = 2*i+2;
    inord(arr,leftChild);
    console.log(arr[i]);
    inord(arr,rightChild);
}
inord([2,4,3,2,1],0);
///Output
// 2
// 2
// 4
// 1
// 2
// 3

//Task-10
class Tree{
    constructor(val,left=null,right=null){
        this.val=val
        this.left=left
        this.right=right
    }
}
function height(root){
    if(root===null) return 0;
    let leftheight=height(root.left);
    let rightHeight=height(root.right);
    return Math.max(leftheight,rightHeight)+1;
}
let root = new Tree(1);
root.left = new Tree(2, new Tree(4), new Tree(5));
root.right = new Tree(3);

let hgt = height(root);
console.log(`Height of Binary Tree is ${hgt}`);
//Output
// Height of Binary Tree is 3

