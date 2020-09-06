const reverseString = function(str) {
    strResult = ''
    for (i=str.length-1; i >=0; i--) {
        strResult += str[i]
    }
    return strResult

}

module.exports = reverseString
