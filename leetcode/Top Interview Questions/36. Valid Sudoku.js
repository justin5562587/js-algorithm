// https://leetcode.com/problems/valid-sudoku/
// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let subboxs = new Array(3).fill(0).map(() => new Array());
    
};


let rows = new Array(9).map(() => new Array(9).fill(0));
console.log(rows)
