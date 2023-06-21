function isLetter(str) {
    return str.length === 1 && (str.match(/[a-z]/i) || str.match(/[0-9]/i));
  }

const palindromes = function (str) {
    str = str.toLowerCase();
    for(let i = 0, j = str.length-1; j != i; ++i, --j){
        if(!isLetter(str[i])){
            j++;
            continue
        }
        else if(!isLetter(str[j])){
            i--;
            continue
        }
        if(str[i] != str[j]){
            return false;
        }
    }
    return true;
};


console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;
