//Task-1
function bubbleSort(arr){
    let n = arr.length
    for(let i=0;i<n;i++){
        
        for(let j=0;j<n-1;j++){
            if(arr[j+1]<arr[j]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                
            }
        }
    }
    console.log(arr);
}
arr=[3,6,1,2,0,9];
bubbleSort(arr);
//Output
// [ 0, 1, 2, 3, 6, 9 ]

//Task-2
function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let mini=arr[i];
        for(let j=i+1;j<n;j++){
            if(arr[j]<mini){
                let temp=mini;
                mini=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr);
}
selectionSort(arr);
//Output
// [ 0, 1, 2, 3, 6, 9 ]

//Task-3
const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };
let ans = quickSort(arr);
console.log(ans);
//Output
//   [ 0, 1, 2, 3, 6, 9 ]

//Task-4
let linear = (arr,target)=>{
    let ans=-1;
    arr.forEach((element,index) => {
        if(element===target){
            ans=index;
            
        }
    });
    return ans;
}
let arr2=[5,3,2,1,9];
ans=linear(arr2,3);
console.log(ans);
//Output-1

//Task-5
let bs = (arr,s,e,target)=>{
    let mid = Math.floor(s + (e - s) / 2);
    if(s>e){
        return -1;
    }
    if(target==arr[mid]) return mid;
    if(target<arr[mid]) return bs(arr,s,mid-1,target)
    if(target>arr[mid]) return bs(arr,mid+1,e,target)
}
let e = arr.length - 1 ;
console.log(bs(arr,0,e,3));
//Output
// 3

//Task-6
let countOcc = (str)=>{
    let map = new Map()
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    console.log(map)
}
countOcc("aabbabc")
//Output
//{ 'a' => 3, 'b' => 3, 'c' => 1 }

//Task-9  
let arr3= [...arr,...arr2];
bubbleSort(arr3);
//Output
// [
//     0, 1, 1, 2, 2,
//     3, 3, 5, 6, 9,
//     9
//   ]
