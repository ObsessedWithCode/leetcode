/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let stairs = 0;

    while(stairs <= n) {
        n = n - stairs;
        stairs++;
    }
    return stairs-1;
};