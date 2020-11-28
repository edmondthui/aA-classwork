function range(start, end) {
    if (start === end){
        return [end];//start;
    } 
    let arr = range(start+1, end);
    arr.unshift(start);
    return arr;
};

console.log(range(1,10));