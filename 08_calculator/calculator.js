const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  total = 0;
	a.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function(a,b) {
  total = 1;
  argumentsAR = Array.from(arguments);
  argumentsAR.forEach(element => {
    total *= element;
  });
  return total;
};

const power = function(num, p) {
	return Math.pow(num, p);
};

const factorial = function(num) {
	if(num == 1 || num == 0){
    return 1;
  }
  return num * factorial(num-1);
};
// console.log(sum([5,2,7]));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
