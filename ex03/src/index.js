var myPetsArray = ["Cat", "Dog"];
myPetsArray.push("Lion");

function myArrayFunction()
{
    myPetsArray.push("Fish", "Bird");
    

    var lastPet = myPetsArray[4];
    var firstPet = myPetsArray[0];

    myNewPets = myPetsArray[2] + firstPet + lastPet;
    
    return myNewPets;
}

console.log(myArrayFunction());
module.exports = myArrayFunction;