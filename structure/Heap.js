import { swap } from '../swap.js';

const getParentIndex = i => {
    if (i <= 2) {
        return 0;
    }

    return Math.floor((i - 1) / 2);
};

// left 2*n + 1;
// right 2*n + 2;

// 堆的实现
// 1.可以提供比较器来设置为小根堆还是大根堆
// 先实现所有元素都是Number的heap
// 先默认大顶堆
class Heap {
    constructor() {
        // 堆中元素的容器，数组只有size个元素实际属于堆
        this.content = [];
        this.size = 0;
    }

    // 向堆中插入元素
    // 向堆的映射数组的size位置插入元素
    push(element) {
        this.content.push(element);
        heapInsert(this.content, this.size);
    }

    // 弹出堆顶元素
    poll() {
        if (this.size > 0) {
            this.size -= 1;
            let ret = this.content[0];
            swap(this.content, 0, this.size);
            this.heapify(arr, 0, this.size);
            return ret;
        }

        return null;
    }

    // 查看堆顶元素
    peek() {
        if (this.size > 0) {
            return this.content[0];
        }

        return null;
    }

    // ---- private functions ----
    
    // 新加入的元素当前停留在了index位置，需要逐渐向上移动
    // 最多移动到0的位置，getParentIndex(0) === 0
    heapInsert(arr, index) {
        while (arr[index] > arr[getParentIndex(index)]) {
            swap(arr, index, getParentIndex(index));
            index = getParentIndex(index);
        }
    }

    // 核心方法-堆化
    // 从index开始向下沉
    // 子节点存在 且 较大的子节点不在大于当前index，则停止
    heapify(arr, index, heapSize) {
        let left = 2 * index + 1;
        while (left < heapSize) {
            // 如果存在右节点 且 右节点比左节点的数值大
            let largestIndex = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
            largestIndex = arr[largestIndex] > arr[index] ? largestIndex : index;

            if (largestIndex === index) {
                break;
            }

            swap(arr, largestIndex, index);
            index = largestIndex;
            left = index * 2 + 1;
        }
    }
}
