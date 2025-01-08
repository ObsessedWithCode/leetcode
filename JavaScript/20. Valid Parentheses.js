/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let char of s) {
        let last_value = stack[stack.length-1];
        if((char == ")" && last_value == "(") || (char == "}" && last_value == "{") || (char == "]" && last_value == "[")) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};