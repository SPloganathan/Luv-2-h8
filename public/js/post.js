const onCategoryChangeHandler = async (event) => {
  const categoryId = event.target.value;
  if (categoryId) {
    const response = await fetch("/api/businesses/" + categoryId, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const businessData = await response.json();
      if (businessData.length) {
        let businessOption = '<option value="">Select a business</option>';
        for (let i = 0; i < businessData.length; i++) {
          businessOption += `<option value="${businessData[i].id}" data-address="${businessData[i].address}, ${businessData[i].city}">${businessData[i].name}</option>`;
        }
        document.getElementById("business-select").innerHTML = businessOption;
      } else {
        document.getElementById("business-select").innerHTML =
          "No Business for this Category";
      }
    }
  } else {
    document.getElementById(
      "business-select"
    ).innerHTML = `<option value="">Select a business</option>`;
  }
};

// adding event listiner for category dropdown to fetch the business details based on the selection
document
  .getElementById("category-select")
  .addEventListener("change", onCategoryChangeHandler);

document
  .getElementById("business-select")
  .addEventListener("change", codeAddress);

// Google map API
// global map variables
var geocoder;
var map;
// below will be used to display the map on page load
function initMap() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(38.0902, -105.7129);
  var mapOptions = {
    zoom: 4,
    center: latlng,
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
//  below function will render the marker on map when business dropdown changes
function codeAddress(event) {
  initMap();
  const address =
    event.target[event.target.selectedIndex].getAttribute("data-address");
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == "OK") {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
      google.maps.event.addListener(marker, "click", function () {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${results[0].geometry.location.lat()},${results[0].geometry.location.lng()}`,
          "_blank"
        );
      });
    }
  });
}
