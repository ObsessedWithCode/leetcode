/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let str = "";
    for(let char of s) {
        char = char.toLowerCase();
        if((char.charCodeAt() >=97 && char.charCodeAt() <= 122) || (char.charCodeAt() >= 48 && char.charCodeAt() <= 57)) {
            str+=char;
        }
    }
    console.log("str: ", str)
    for(let i = 0; i < str.length/2; i++) {
        if(str[i] != str[str.length-1-i]) {
            return false;
        }
    }
    return true;
};