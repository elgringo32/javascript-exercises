const sumAll = function(firstInt, secondInt) {
    let start = Math.min(firstInt, secondInt);
    let end = Math.max(firstInt, secondInt);
    let result = 0
    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt) || firstInt< 0 || secondInt <0) {
        return 'ERROR'
    }
    else {
        for (i=start; i <=end; i++) {
            result += i;
        }
        return result
    }
    
}

module.exports = sumAll
