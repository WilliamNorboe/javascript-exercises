const findTheOldest = function(people) {
    let result = people.reduce((oldest, person) =>{
        if(!person.yearOfDeath || !oldest.yearOfDeath){
            if(person.yearOfBirth < oldest.yearOfBirth){
                oldest = person;
            }
        }
        else if((person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth)){
            oldest = person;
        }
        return oldest;
    });
    return result;
};
// Do not edit below this line
module.exports = findTheOldest;
