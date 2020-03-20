module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw Error('arguement is not array')
    }
    let newarr = [];

    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
    i=i+1;
    }
    else if (arr[i] === '--discard-prev') {
    newarr.pop();
    }
    else if (arr[i] === '--double-next') {
    if (i !== arr.length-1) {
    newarr.push(arr[i + 1]);
    }
    }
    else if (arr[i] === '--double-prev') {
    if ((i - 1) >= 0) {
    newarr.push(arr[i - 1]);
    }
    }
    else {
    newarr.push(arr[i]);
    }
    }
    return newarr;
};
