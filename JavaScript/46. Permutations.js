/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let res = [];

    function backtrack(sub_arr) {
        if(sub_arr.length == nums.length) {
            res.push([...sub_arr]);
            return;
        } 

        for(let i = 0; i < nums.length; i++) {
            if(!sub_arr.includes(nums[i])) {
                sub_arr.push(nums[i]);
                backtrack(sub_arr, res);
                sub_arr.pop();
            }
        }
    }

    backtrack([]);
    return res;
};