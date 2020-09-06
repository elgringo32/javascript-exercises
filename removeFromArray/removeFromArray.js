const removeFromArray = function(arr, int) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] = int) {
            arr = arr.splice(i,1);
            return arr;
        }
    }
    
    console.log(arr);
}

module.exports = removeFromArray
