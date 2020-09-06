const removeFromArray = function(...args) {
    let newArray = args[0];
    return newArray.filter(val => !args.includes(val))
        
    
    
}

module.exports = removeFromArray
