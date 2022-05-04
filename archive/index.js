// import main from './algorithm/insertSort.js';
// import main from './algorithm/bubbleSort.js';
// import {  } from './algorithm/selectSort.js';
// import main from './algorithm/insertSort.js';
// import sort from './algorithm/shellSort.js';
import quickSort from './algorithm/quickSort.js';
import radixSort from './algorithm/radixSort.js';
 
// const arr = [9, 100, -10, 490, 78, 6, 100, 200, -98, 201, 49, 88];

const arr = [-9, 79, 0, 23, -568, 70];

const arr1 = [100, 80, 769, 112, 80, 8];


const logExecuteDuration = (func) => {
    const size = 80000;
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(parseInt(Math.random() * size));
    }
    console.log('执行开始', new Date());
    func(arr);
    console.log('执行结束', new Date());

};

// logExecuteDuration(sort);
// 
// quickSort(arr, 0, arr.length - 1);


radixSort(arr1);
// sort(arr, );
// console.log(arr)