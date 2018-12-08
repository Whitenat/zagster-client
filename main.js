const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

//Arrays to hold data points pulled from JQUERY
let years = []

let months = []

let yearsColumbia = []

let monthsColumbia = []

let yearsDrake = []

let monthsDrake = []

let yearsG5 = []

let monthsG5 = []

let yearsGalveston = []

let monthsGalveston = []

let yearsGrc = []

let monthsGrc = []

//Pulls data from JQUERY request and ensures order of execution
function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)

    $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(updatePerMonth);

    $.when ($.getJSON(BASE_URL + "/rides/count/columbia_simpson/per_month", perYearColumbia),
    ).then(updatePerMonthColumbia);

    $.when ($.getJSON(BASE_URL + "/rides/count/drake_park/per_month", perYearDrake),
    ).then(updatePerMonthDrake);

    $.when ($.getJSON(BASE_URL + "/rides/count/g5/per_month", perYearG5),
    ).then(updatePerMonthG5);

    $.when ($.getJSON(BASE_URL + "/rides/count/galveston/per_month", perYearGalveston),
    ).then(updatePerMonthGalveston);

    $.when ($.getJSON(BASE_URL + "/rides/count/grc/per_month", perYearGrc),
    ).then(updatePerMonthGrc);

}

//Displays total number of rides
function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
     console.log(data)
}

//Puts all of the data into the years and then months array
function perYear(data) {
    for (var i = 2016; i <= 2018; ++i){
        years.push(data[i]);
    }
    for (var m = 0, y = 9; m <=3, y <= 12; ++m, ++y) {
        months.push(years[0][m][y]);
    }
    for (var m = 0, y = 1; m <=11, y <= 12; ++m, ++y) {
        months.push(years[1][m][y]);
    }
    for (var m = 0, y = 1; m <=9, y <= 10; ++m, ++y) {
        months.push(years[2][m][y]);
    }
}

function perYearColumbia(data) {
    for (var i = 2016; i <= 2018; ++i){
        if(data[i] === undefined) {
            yearsColumbia.push(0)
        } else{
        yearsColumbia.push(data[i]);
        }
    }
    for (var m = 0, y = 9; m <=3, y <= 12; ++m, ++y) {
        monthsColumbia.push(yearsColumbia[0][m][y]);
    }
    for (var m = 0, y = 2; m <=11, y <= 12; ++m, ++y) {
        monthsColumbia.push(yearsColumbia[1][m][y]);
    }
    for (var m = 0, y = 1; m <=9, y <= 10; ++m, ++y) {
        monthsColumbia.push(yearsColumbia[2][m][y]);
    }
}

function perYearDrake(data) {
    for (var i = 2016; i <= 2018; ++i){
        if (data[i] === undefined) {
            yearsDrake.push(0)
        } else{
        yearsDrake.push(data[i]);
        }
    }
    for (var m = 0, y = 9; m <=3, y <= 12; ++m, ++y) {
        if (yearsDrake[0][m] === undefined){
            monthsDrake.push(0);
        } else {
            monthsDrake.push(yearsDrake[0][m][y]);
        }
    }
    for (var m = 0, y = 2; m <=1, y <= 14; ++m, ++y) {
        if (yearsDrake[1][m] === undefined){
            monthsDrake.push(0);
        } else {
            monthsDrake.push(yearsDrake[1][m][y]);
        }
    }
    for (var m = 0, y = 2; m <=8, y <= 10; ++m, ++y) {
        if (yearsDrake[2][m] === undefined){
            monthsDrake.push(0);
        } else {
            monthsDrake.push(yearsDrake[2][m][y]);
        }
    }
}

function perYearG5(data) {
    for (var i = 2016; i <= 2018; ++i){
        if (data[i] === undefined) {
            yearsG5.push(0)
        } else{
        yearsG5.push(data[i]);
        }
    }
    for (var m = 0, y = 9; m <=8, y <= 17; ++m, ++y) {
        if (yearsG5[0] === 0){
            monthsG5.push(0);
        } else {
            monthsG5.push(yearsG5[0][m][y]);
        }
    }
    for (var m = 0, y = 6; m <=1, y <= 12; ++m, ++y) {
            monthsG5.push(yearsG5[1][m][y]);
    }
    for (var m = 0, y = 1; m <=9, y <= 10; ++m, ++y) {
            monthsG5.push(yearsG5[2][m][y]);
    }
}

function perYearGalveston(data) {
    for (var i = 2016; i <= 2018; ++i){
        if (data[i] === undefined) {
            yearsGalveston.push(0)
        } else{
        yearsGalveston.push(data[i]);
        }
    }
    for (var m = 0, y = 9; m <=8, y <= 17; ++m, ++y) {
        if (yearsGalveston[0] === 0){
            monthsGalveston.push(0);
        } else {
            monthsGalveston.push(yearsGalveston[0][m][y]);
        }
    }
    for (var m = 0, y = 1; m <=12, y <= 13; ++m, ++y) {
        if (yearsGalveston[0] === 0){
            monthsGalveston.push(0);
        } else {
            monthsGalveston.push(yearsGalveston[1][m][y]);
        }
    }
    for (var m = 0, y = 7; m <=3, y <= 10; ++m, ++y) {
            monthsGalveston.push(yearsGalveston[2][m][y]);
    }
}

function perYearGrc(data) {
    for (var i = 2016; i <= 2018; ++i){
        if (data[i] === undefined) {
            yearsGrc.push(0)
        } else{
        yearsGrc.push(data[i]);
        }
    }
    for (var m = 0, y = 9; m <=3, y <= 12; ++m, ++y) {
        monthsGrc.push(yearsGrc[0][m][y]);
    }
    for (var m = 0, y = 1; m <=10, y <= 11; ++m, ++y) {
        monthsGrc.push(yearsGrc[1][m][y]);
    }
    for (var m = 0, y = 1; m <=9, y <= 10; ++m, ++y) {
        monthsGrc.push(yearsGrc[2][m][y]);
    }
}

//Creates the graph and displays the data from the months array
function updatePerMonth() {

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ "9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18","9/18", "10/18" ],
            datasets: [{
                label: "Zagster Rides Per Month",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: months,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function updatePerMonthColumbia() {

    var ctx = document.getElementById('monthlyColumbiaChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ "9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18","9/18", "10/18" ],
            datasets: [{
                label: "Zagster Rides Per Month at Columbia and Simpson",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: monthsColumbia,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function updatePerMonthDrake() {

    var ctx = document.getElementById('monthlyDrakeChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ "9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18","9/18", "10/18" ],
            datasets: [{
                label: "Zagster Rides Per Month at Drake Park",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: monthsDrake,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function updatePerMonthG5() {

    var ctx = document.getElementById('monthlyG5Chart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ "9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18","9/18", "10/18" ],
            datasets: [{
                label: "Zagster Rides Per Month at G5",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: monthsG5,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function updatePerMonthGalveston() {

    var ctx = document.getElementById('monthlyGalvestonChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ "9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18","9/18", "10/18" ],
            datasets: [{
                label: "Zagster Rides Per Month at Galveston",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: monthsGalveston,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function updatePerMonthGrc() {

    var ctx = document.getElementById('monthlyGrcChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ "9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18","9/18", "10/18" ],
            datasets: [{
                label: "Zagster Rides Per Month at GRC",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: monthsGrc,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}