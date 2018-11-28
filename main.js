const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

//Arrays to hold data points pulled from JQUERY
let years = []

let months = []

let yearsColumbia = []

let monthsColumbia = []

let yearsDrake = []

let monthsDrake = []

//Pulls data from JQUERY request and ensures order of execution
function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)

    $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(perMonth);

    $.when (perMonth
    ).then(updatePerMonth);

    $.when ($.getJSON(BASE_URL + "/rides/count/columbia_simpson/per_month", perYearColumbia),
    ).then(perMonthsColumbia);

    $.when (perMonthsColumbia
    ).then(updatePerMonthColumbia);

    $.when ($.getJSON(BASE_URL + "/rides/count/drake_park/per_month", perYearDrake),
    ).then(perMonthsDrake);

    $.when (perMonthsDrake
    ).then(updatePerMonthDrake);

}

//Displays total number of rides
function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
     console.log(data)
}

//Puts all of the data into the years array
function perYear(data) {
    for (var i = 2016; i <= 2018; ++i){
        years.push(data[i]);
    }
    console.log(years[0][0][9]);
    console.log(years);
}

function perYearColumbia(data) {
    for (var i = 2016; i <= 2018; ++i){
        if(data[i] === undefined) {
            yearsColumbia.push(0)
        } else{
        yearsColumbia.push(data[i]);
        }
    }
    console.log(yearsColumbia[0][0][9]);
    console.log(yearsColumbia);
}

function perYearDrake(data) {
    for (var i = 2016; i <= 2018; ++i){
        if (data[i] === undefined) {
            yearsDrake.push(0)
        } else{
        yearsDrake.push(data[i]);
        }
    }
    console.log(yearsDrake);
}

//pulls the rides per month and pushes it into the months array
function perMonth() {
    for (var m = 0, y = 9; m <=3, y <= 12; ++m, ++y) {
            months.push(years[0][m][y]);
    }
    for (var m = 0, y = 1; m <=11, y <= 12; ++m, ++y) {
        months.push(years[1][m][y]);
    }
    for (var m = 0, y = 1; m <=9, y <= 10; ++m, ++y) {
        months.push(years[2][m][y]);
    }
    console.log(months);
}

function perMonthsColumbia() {
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

function perMonthsDrake() {
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

//Creates the graph and displays the data from the months array
function updatePerMonth() {

    console.log(months)

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

    console.log(monthsColumbia)

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

    console.log(monthsDrake)

    var ctx = document.getElementById('monthlyDrakeChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ "9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18","9/18", "10/18" ],
            datasets: [{
                label: "Zagster Rides Per Month at Drake",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: monthsDrake,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}
 