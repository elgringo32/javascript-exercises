
const repeatString = function(string, loops) {
        let result = ''
        if (loops < 0) {
            return 'ERROR';
        }
        else {
            for (i=0; i < loops; i++) {
                result = result.concat(string)
            }
        return result;
        }
        console.log(result);
}


module.exports = repeatString
