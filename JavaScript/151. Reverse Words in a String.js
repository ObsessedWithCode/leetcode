/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(" ").reverse().join(" ");
    let str = s[0];
    for(let i = 1; i < s.length; i++) {
        if(s[i] == s[i-1] && s[i] == " ") continue;
        str += s[i];
    }
    return str;
};