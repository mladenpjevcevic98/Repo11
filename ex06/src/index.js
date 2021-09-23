myArray1 = [
    [2],
    [5, 6, 7],
    [8, 9]
];

myArray2 = [
    [2.5, 2],
    [0.5, 0.2],
    [8]
];
myArray3 = [
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9]
];


function multipleArrayFunction()
{
    var product = 1;
    var sum = 0;
    for(var i=0; i<myArray1.length; i++)
    {
        for(var j=0; j<myArray1[i].length; j++)
        {
            sum +=myArray1[i][j];
            product *= myArray1[i][j];

            var newArray = [product, sum];
        }
    }

    return newArray;

}

console.log(multipleArrayFunction());
module.exports = multipleArrayFunction;

function multipleArrayFunction1()
{
    var product = 1;
    var sum = 0;
    for(var i=0; i<myArray2.length; i++)
    {
        for(var j=0; j<myArray2[i].length; j++)
        {
            sum +=myArray2[i][j];
            product *= myArray2[i][j];

            var newArray = [product, sum];
        }
    }

    return newArray;

}

console.log(multipleArrayFunction1());
module.exports = multipleArrayFunction1;

function multipleArrayFunction3()
{
    var product = 1;
    var sum = 0;
    for(var i=0; i<myArray3.length; i++)
    {
        for(var j=0; j<myArray3[i].length; j++)
        {
            sum +=myArray3[i][j];
            product *= myArray3[i][j];

            var newArray = [product, sum];
        }
    }

    return newArray;

}

console.log(multipleArrayFunction3());
module.exports = multipleArrayFunction3;