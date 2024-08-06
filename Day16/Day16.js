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




