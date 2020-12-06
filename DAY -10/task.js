// Write a JavaScript prototype method named begetdatebetween() which extends Date prototype, to find the in between date from start and end date.


function dateBetween(date) {
    const date0 = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (date0 < 10){
        date = '0' + date;
    }
    if (month < 10){
        month = '0' + month;
    }
    return date0 +'/'+ month +'/' + year;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

String.prototype.begetdatebetween = function() {
    var dates = this.split(",")
    for(var i = 0; i < 2; i++){
        dates[i] = dates[i].split('/')
    }
    const startDate = new Date(dates[0][2], dates[0][1]-1, dates[0][0])
    const endDate = new Date(dates[1][2], dates[1][1]-1, dates[1][0])
    var dateArray = new Array();
    var currentDate = startDate;
    currentDate = currentDate.addDays(1);
    while (currentDate < endDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    for (i = 0; i < dateArray.length; i ++ ) {
        return(dateBetween(dateArray[i]));
    }
}

"01/11/2020,03/11/2020".begetdatebetween()
