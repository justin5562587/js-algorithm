// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/

// 题目要求不申请额外内存空间，在现有数据结构中进行交换

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length <= 1) return matrix; 

    let N = matrix.length;
    let low, high, a, b, c, d, temp;

    // a = matrix[k][low]; // 左上角
    // b = matrix[low][N - 1 - k]; // 右上角
    // c = matrix[N - 1 - k][N - 1 - low]; // 右下角
    // d = matrix[N - 1 - low][k]; // 左下角

    for (let k = 0; k < N >>> 1; k++) { // 表示当前处理第一个外圈，0表示第一个，共处理(int)(N/2)次
        low = 0 + k;
        high = N - 1 - k;
        
        for (; low < high; low++) {            
            temp = matrix[k][low];
            matrix[k][low] = matrix[N - 1 - low][k];
            matrix[N - 1 - low][k] = matrix[N - 1 - k][N - 1 - low];
            matrix[N - 1 - k][N - 1 - low] = matrix[low][N - 1 - k];
            matrix[low][N - 1 - k] = temp;
        }
    }

    return matrix;
};

// test
rotate([[1,2,3],[4,5,6],[7,8,9]]);
