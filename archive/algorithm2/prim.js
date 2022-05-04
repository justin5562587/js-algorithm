// 创建最小生成树


const prim = () => {

};

class MGraph {
    constructor() {
        
    }
}

const print = (num) => {
    let ret = "";
    for (let i = 63; i >=0; i--) {
        let c = (num & (1 << i) === 0 ? "0" : "1");    
        ret += c; 
    }
    console.log(ret);
};