const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askIfGreaterThan(el1, el2, callback){
    reader.question(`Is the ${el1} greater than the ${el2}?; Please type "yes" or "no". `, function(answer){
        if (answer === "yes") {
            callback(true);
        } else {
            callback(false);
        }
    });    
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
            if (isGreaterThan) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i+1] = temp;
                
                madeAnySwaps = true;
                innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
            } else {
                madeAnySwaps = false;
                innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
            }
        });      
    } else {
        return outerBubbleSortLoop(madeAnySwaps); 
    }
}

// let arr1 = [9,2,3,4,5];
// innerBubbleSortLoop(arr1, 0, false);

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if (madeAnySwaps){
            madeAnySwaps = false;
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop)
        }
        else {
            sortCompletionCallback(arr);
        }
        
    }
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    madeAnySwaps = true;
    outerBubbleSortLoop(madeAnySwaps);
}


absurdBubbleSort([3, 2, 1, 2, 6, 7, 2, 7, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});