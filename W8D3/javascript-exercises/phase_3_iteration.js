Array.prototype.bubbleSort = function() {
    let sorted = false;
    let temp = 0;
    while (!sorted) {
        sorted = true;
        for (let i=0; i < this.length; i++){
            if (this[i] > this[i+1]) {
                sorted = false;  
                temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                // this[i+1], this[i] = this[i], this[i+1];
            }
        }
    }
    return this;
};

console.log([1,2,7,4,3,5,6,9,8].bubbleSort());

Array.prototype.substrings = function() {
    let substrings = [];
    for (let i = 0; i < this.length; i++ ){
        for (let j = i+1; j <= this.length; j++){
            substrings.push(this.slice(i, j));
        }
    }
    return substrings;
};

console.log(["1","2","7","4","3","5","6","9","8"].substrings());