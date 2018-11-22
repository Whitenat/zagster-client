const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)
//$(perMonth)

let years = []

let months = []

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month", perYear)

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
    console.log(data)
    console.log(years);
}

//function perMonth(years) {
  //  for (var i in years){
    //    for (var m = 0; m <=11; ++m) {
      //      months.push(years[m]);
        //}
    //}
    //console.log(months);
//}

function updatePerMonth(data) {
    console.log(data[2016][0])
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ["total rides"],
            datasets: [{
                label: "Zagster Rides",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: [data[2016][0][9],data[2016][1][10],data[2016][2][11]],
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}
