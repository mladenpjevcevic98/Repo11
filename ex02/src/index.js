var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction()
{
    var monday = temps[0][0] + temps[0][1] + temps[0][2] + temps[0][3];
    var tuesday = temps[1][0] + temps[1][1] + temps[1][2] + temps[1][3];
    var wednesday = temps[2][0] + temps[2][1] + temps[2][2] + temps[2][3];
    var thursday = temps[3][0] + temps[3][1] + temps[3][2] + temps[3][3];
    var friday = temps[4][0] + temps[4][1] + temps[4][2] + temps[4][3];
    
    var averageDayTemp = [monday/4, tuesday/4, wednesday/4, thursday/4, friday/4]

    return averageDayTemp;
}

console.log(myArrayFunction());
module.exports = myArrayFunction;