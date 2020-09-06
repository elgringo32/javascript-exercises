const palindromes = function(str) {
    str = str.replace(/[' ',.!?\\-]/g,'').toLowerCase();
    console.log(str);
    let pStr = str.split('').reverse().join('').replace(/[.!?\\-]/g,'');
    console.log(pStr);
    if (str === pStr) {
        return true;
    } 
    else {
        return false;
    }

}

module.exports = palindromes
