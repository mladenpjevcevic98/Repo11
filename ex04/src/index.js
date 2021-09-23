var monitorsListArray = ["Apple", "Peach", "Berry"];

var monitorsList = [];
function myMonitorsFunction(arr)
{
    var newMonitorsList = [];
    for(arr=0; arr<=2; arr++)
    {
        newMonitorsList[arr] = monitorsListArray[arr] + " " +(arr + 1);
                monitorsList[arr] += newMonitorsList[arr];
    }

    return monitorsList;

}

console.log(myMonitorsFunction(0));

module.exports = myMonitorsFunction;