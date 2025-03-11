/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    let output = [];

    for (let str of strs) {
        let sortedStr = str.split("").sort((a,b) => a.charCodeAt()-b.charCodeAt()).join("");

        if(obj[sortedStr]) {
            obj[sortedStr].push(str);
        } else {
            obj[sortedStr] = [str];
        }
    }
    Object.entries(obj).forEach(([key, value]) => {
        output.push(value)
    });

    return output;
};