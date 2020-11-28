Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    let arr = [];
    this.myEach(function(num){
        arr.push(callback(num));
    });
    return arr;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let value = 0;

    if (initialValue) {
        value = initialValue;
    } else {
        value = 0;
    }
    this.myEach(function(num){
        value = callback(value, num);
    });

    return value;
};

console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
}));