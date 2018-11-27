const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)


let years = []

let months = []

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)

    $.when ([$.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
             perYear, 
             perMonthSixteen, 
             perMonthSeventeen, 
             perMonthEighteen
    ]).then([updatePerMonth])
    

}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
     console.log(data)
}

function perYear(data) {
    for (var i = 2016; i<=2018; ++i){
        years.push(data[i]);
    }
    console.log(years[0][0][9]);
    console.log(years);
}


function perMonthSixteen(years) {
    for (var i= 0, m = 0, y = 9; m <=3, y <= 12; ++m, ++y) {
        if (years[i][m][y] === undefined) {
            months.push(0);
        } else {
            months.push(years[i][m][y]);
        }
    }
}

function perMonthSeventeen(years) {
    for (var i= 1, m = 0, y = 1; m <=11, y <= 12; ++m, ++y) {
        if (years[i][m][y] === undefined) {
            months.push(0);
        } else {
            months.push(years[i][m][y]);
        }
  }
}

function perMonthEighteen(years) {
    for (var i= 2, m = 0, y = 1; m <=9, y <= 10; ++m, ++y) {
        if (years[i][m][y] === undefined) {
            months.push(0);
        } else {
            months.push(years[i][m][y]);
        }
  }
}

function updatePerMonth(months) {

    console.log(months)

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24","25", "26" ],
            datasets: [{
                label: "Zagster Rides",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: [months],
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}
