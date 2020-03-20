module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let a=1;
        if(arr.some(b=>Array.isArray(b)))
        {
            let newarr=arr.flat();
            return  this.calculateDepth(newarr)+a;
        }
        return a;
    }
};
