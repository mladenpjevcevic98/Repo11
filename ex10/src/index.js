function mySplice(arr1, arr2, n)
{
    var spliceResult = arr1.concat(arr2).concat(n);

    return spliceResult;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));

module.exports = mySplice;
