/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];
    let nQueens = Array(n).fill().map(() => Array(n).fill('.'));

    function isSafe(row, col) {
        for(let i = 0; i < n; i++) {
            if(nQueens[i][col] === "Q") {
                return false;
            }
        }
        for(let i = 0; i < n; i++) {
            if(nQueens[row][i] === "Q") {
                return false;
            }
        }
        for(let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) {
            if(nQueens[i][j] === "Q") {
                return false;
            }
        }
        for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if(nQueens[i][j] === "Q") {
                return false;
            }
        }
        return true;
    }

    function backtrack(row) {
        console.log(nQueens)
        if(row === n) {
            res.push(nQueens.map(row => row.join("")));
            return;
        }
        for(let col = 0; col < n; col++) {
            if(isSafe(row, col)) {
                nQueens[row][col] = "Q";
                backtrack(row+1);
                nQueens[row][col] = ".";
            }
        }
    }

    backtrack(0);
    return res;
};