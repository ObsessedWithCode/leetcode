/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length;

    let res = [];

    for(let i = 0; i < len-2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let low = i+1;
        let high = len-1;

        while(low < high) {
            let sum = nums[low] + nums[high] + nums[i];
            if(sum == 0) {
                res.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;
                while (low < high && nums[low] === nums[low - 1]) low++;
                while (low < high && nums[high] === nums[high + 1]) high--;
            } else if(sum > 0) {
                high--;
            } else {
                low++;
            }
        }
    }

    return res;
};