Array.prototype.uniq = function() {
    let unique_arr = [];
    this.forEach(function(num) {
        if (!unique_arr.includes(num)) {
            unique_arr.push(num);
        }
    });
    return unique_arr;
}

Array.prototype.twoSum = function() {
    let arr = [];
    for (let i = 0; i <= this.length; i++){
        for (let j = i+1; j <= this.length; j++) {
            if (this[i]+this[j] === 0){
                arr.push([i ,j]);
            }
        }
    }
    return arr;
}

Array.prototype.transpose = function() {
    let arr = [];
    let sub_arr = [];
    for (let i = 0; i < this[0].length; i++) {
        sub_arr = [];
        for (j = 0; j < this.length; j++ ) {
            sub_arr.push(this[j][i]);
        }
        arr.push(sub_arr);
    }
    return arr;
}
// [[1,2,3],[4,5,6],[7,8,9]]
// [[1,4,7],[2,5,8],[3,6,9]]



