import Stack from './structure/Stack.js';

// 并查集
class Node {
    constructor(value) {
        this.value = value;
    }
}

class UnionFind {
    constructor(values) {
        this.nodes = new Map();
        this.parents = new Map();
        this.sizeMap = new Map();

        for (let value of values) {
            let i = new Node(value);
            this.nodes.set(value, i);
            this.parents.set(i, i);
            this.sizeMap.set(i, 1);
        }
    }

    // 寻找头节点
    findParent(node) {
        let path = new Stack();
        if (node) {
            // 一直找到头节点为自己停止
            while (this.parents.get(node) != node) {
                path.push(node);
                node = this.parents.get(node);
            }
            return node;
        }

        // 扁平化 flatten
        while (!path.isEmpty()) {
            this.parents.set(path.pop(), node);
        }

        return null;
    }

    // 查看两个value是否属于同一个集合
    isSameSet(v1, v2) {
        let node1 = this.nodes.get(v1);
        let node2 = this.nodes.get(v2);
        if (node1 && node2) {
            // return this.parents.get(node1) === this.parents.get(node2);
            return this.findParent(node1) === this.findParent(node2);
        }

        return false;
    }

    // 合并两个value所在的集合，成功返回true，否则返回false
    union(v1, v2) {
        let node1 = this.nodes.get(v1);
        let node2 = this.nodes.get(v2);
        if (node1 && node2) {
            let parent1 = this.findParent(node1);
            let parent2 = this.findParent(node2);
            let size1 = this.sizeMap.get(parent1);
            let size2 = this.sizeMap.get(parent2);
            let big = size1 >= size2 ? parent1 : parent2;
            let small = big === parent1 ? parent2 : parent1;
            this.parents.set(small, big);
            this.sizeMap.set(big, size1 + size2);
            this.sizeMap.delete(small);

            return true;
        }

        return false;
    }
}

// test 寻找最大有多少个人是同一个人
class Person {
    constructor(id1, id2, id3) {
        this.id1 = id1;
        this.id2 = id2;
        this.id3 = id3;
    }
}

let persons = [
    new Person('abc', 111, 'ttt'),
    new Person('bss', 222, 'ttt'),
    new Person('sdfa', 222, '09sd'),
];

const findNumbersOfSamePerson = (persons) => {
    let id1Map = new Map();
    let id2Map = new Map();
    let id3Map = new Map();

    let unionFind = new UnionFind(persons);

    // todo
    for (let person of persons) {
        if (id1Map.get(person.id1)) {
            unionFind.union(person, id1Map.get(person.id1));
        } else {
            id1Map.set(person.id1, person);
        }

        if (id2Map.get(person.id2)) {
            unionFind.union(person, id2Map.get(person.id2));
        } else {
            id2Map.set(person.id2, person);
        }

        if (id3Map.get(person.id3)) {
            unionFind.union(person, id3Map.get(person.id3));
        } else {
            id3Map.set(person.id3, person);
        }
    }

    let ans = 0;
    for (let i of unionFind.sizeMap.values()) {
        ans = i > ans ? i : ans;
    }

    return ans;
};

const ans = findNumbersOfSamePerson(persons);
console.log(ans);
