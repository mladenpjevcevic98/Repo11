

function largestNumFromArr(number)
{
var arr = number;
var max1 = arr[0][0];
var max2 = arr[1][0];
var max3 = arr[2][0];
var max4 = arr[3][0];

for (var i = 0; i <= arr[0].length; i++)
{
    
    if (max1 < arr[0][i] ) 
    {
        max1 = arr[0][i];
        
    }
}
for (var j = 0; j <= arr[1].length; j++)
{
    
    if (max2 < arr[1][j] ) 
    {
        max2 = arr[1][j];
        
    }
}

for (var k = 0; k <= arr[2].length; k++)
{
    
    if (max3 < arr[2][k] ) 
    {
        max3 = arr[2][k];
        
    }
}

for (var l = 0; l <= arr[3].length; l++)
{
    
    if (max4 < arr[3][l] ) 
    {
        max4 = arr[3][l];
        
    }
}

var maxNumArray = [max1, max2, max3, max4];

return  maxNumArray;
}


console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestNumFromArr([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]]));

module.exports = largestNumFromArr;