/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {};

    for(let char of s) {
        if(obj[char]) {
            obj[char]+=char;
        } else {
            obj[char] = char;
        }
    }
    let obj2 = Object.values(obj);

    let sortedArr = obj2.sort((a,b)=>b.length-a.length);
    
    return sortedArr.join("");
};