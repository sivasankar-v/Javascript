function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback 
    var result = a + b;
    return cb(result)
    
    // function cb as argument return the result
}
function cb(result){
    return result
}

module.exports = RunCallback;
