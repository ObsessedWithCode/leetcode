/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res = [];

    function backtrack (start, temp) {
        if(temp.length >= 2) res.push([...temp]);

        let set = new Set();

        for(let i = start; i < nums.length; i++) {
            if(set.has(nums[i])) continue;

            if(temp.length == 0 || nums[i] >= temp[temp.length-1]) {
                set.add(nums[i]);
                temp.push(nums[i]);
                backtrack(i + 1, temp);
                temp.pop();
            }
        }
    }

    backtrack(0, []);
    return res;
};