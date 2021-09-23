var myNestedArray = [];

function myNestedFunction(arr)
{
    myNestedArray[arr] = arr;
    
    return myNestedArray[arr];
}

console.log(myNestedFunction(["Toblerone", 5])); console.log(myNestedFunction(["Milka", 3]));

module.exports = myNestedFunction;
