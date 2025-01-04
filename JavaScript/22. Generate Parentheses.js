/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    function backtrack(open, close, str) {
        console.log("open: ", open, " close: ", close, " str: ", str)
        if(str.length == 2*n) {
            res.push(str);
            return;
        }
        if(open < n) {
            backtrack(open+1, close, str+"(")
        }
        if(close < open) {
            backtrack(open, close + 1, str+")")
        }

    }

    backtrack(0,0,'');
    return res;

};