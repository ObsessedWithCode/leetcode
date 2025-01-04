/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2) return 0;
    let sortedArr = nums.sort((a, b) => a - b);

    let maxDiff = -Infinity;
    for(let i = 1; i < sortedArr.length; i++) {
        maxDiff = Math.max(maxDiff, sortedArr[i] - sortedArr[i-1]);
    }
    return maxDiff;
};