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
