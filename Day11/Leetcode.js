//Ques 1
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filterArray=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filterArray.push(arr[i]);
        }
    }
    return filterArray
};

//Ques 2
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val=init;
    for(let i=0;i<nums.length;i++){
        val=fn(val,nums[i]);
    }
    return val;
};