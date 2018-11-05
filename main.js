const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
}

function updateRideCount(data) {
    numberOfRides = data.updateRideCount
    $("h2#rideCount").html(numberOfRides)
}