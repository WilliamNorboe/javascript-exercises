const sumAll = function(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if(num1 > num2){
        temp = num2;
        num2 = num1;
        num1 = temp;
    }
    let total = 0;
    for(let i = num1; i <= num2; ++i){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
