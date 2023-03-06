// adding event listiner for category dropdown to fetch the category details based on the selection
// document
//   .getElementById("category-select")
//   .addEventListener("change", onCategoryChangeHandler);

//Coppied this from newPost to try add address using a map
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

//TODO - add function wich will render the marker on map when new address added

//adding event listener for new business submit
const form = document.querySelector("#business-form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  //getting data for POSTing new business from input
  const category_id = document.querySelector("#category-select").value;
  const name = document.querySelector("#name").value;
  const address = document.querySelector("#address").value;
  const city = document.querySelector("#locality").value;
  const state = document.querySelector("#administrative_area_level_1").value;
  const zip_code = document.querySelector("#postal_code").value;

  //ADD new business
  fetch("/api/businesses", {
    method: "POST",
    body: JSON.stringify({ category_id, name, address, city, state, zip_code }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        alert("New business added successfully");
        window.location.reload();
      } else {
        alert("Failed creating business. Please try again");
      }
    })
    .catch((err) => ("Something went wrong", err));
}
