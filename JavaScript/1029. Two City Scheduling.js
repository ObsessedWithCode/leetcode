/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let minCosts = 0;
    costs = costs.sort((a,b) => (b[0] - b[1]) - (a[0] - a[1]));
    console.log(costs)
    for(let i = 0; i < costs.length/2; i++) {
        minCosts += costs[i][1];
    }

    for(let i = costs.length/2; i < costs.length; i++) {
        minCosts += costs[i][0];
    }
    return minCosts;
};