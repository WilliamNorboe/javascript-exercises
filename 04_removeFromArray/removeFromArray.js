const removeFromArray = function(ar) {
    for(let j = 1; j < arguments.length; ++j){
        let i = -1;
        for(i = 0; i < ar.length; ++i){
            if(ar[i] === arguments[j]){
                break;
            }
        }
        if(i != -1){
            ar.splice(i, 1);
        }
    }

    return ar;
};

// Do not edit below this line
module.exports = removeFromArray;
