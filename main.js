const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month", updatePerMonth)
    var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["total rides"],
        datasets: [{
            label: "Zagster Rides",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: updateRideCount(),
        }]
    },

    // Configuration options go here
    options: {}
});

}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}

function updatePerMonth(data) {
    console.log(data)
}
