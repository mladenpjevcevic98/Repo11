var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(arr)
{
    myArr[2]= arr;

    var myItems = myArr;

    return myItems;
}

console.log(myArrayFunction(6));

module.exports = myArrayFunction;
