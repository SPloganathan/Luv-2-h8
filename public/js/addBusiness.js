


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
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

//getting data for POSTing new business from input
const category = document.querySelector("#category-select");
const businessName = document.querySelector("#name");
const address = document.querySelector("#address");
const city = document.querySelector("#locality");
const state = document.querySelector("#administrative_area_level_1");
const zip_code = document.querySelector("#postal_code");


const formData = new FormData();

formData.append("category", category.value);
formData.append("name", businessName.value);
formData.append("address", address.value);
formData.append("city", city.value);
formData.append("state", state.value);
formData.append("zip_code", zip_code.value);

console.log(formData);

//ADD new business
 fetch("/api/businesses", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(response);
      alert("New business added successfully");
      window.location.reload();
    })
    .catch((err) => ("Something went wrong", err));

};