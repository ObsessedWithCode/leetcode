/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;
    
    for(let i = 2; i <= x; i++) {
        let sqr = i*i;
        if(sqr == x) {
            return i;
        } else if(sqr > x) {
            return i-1;
        }
    }

};