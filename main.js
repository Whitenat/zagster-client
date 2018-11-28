const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

//Arrays to hold data points pulled from JQUERY
let years = []

let months = []

//Pulls data from JQUERY request and ensures order of execution
function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)

    $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(perMonth);

    $.when (perMonth
        ).then(updatePerMonth);
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

//pulls the rides per month in 2016 and pushes it into the months array
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
 