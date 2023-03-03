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
        let businessOption = "";
        for (let i = 0; i < businessData.length; i++) {
          businessOption += `<option value="${businessData[i].id}">${businessData[i].name}</option>`;
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

 //adding event listener for new post submit (including images)

 const form = document.querySelector("#post-form");

 form.addEventListener("submit", submitForm);

 function submitForm(event) {
  event.preventDefault();

  //const category = document.querySelector("#category-select");
  const business = document.querySelector("#business-select")
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const file = document.querySelector("#file");

  console.log(file.files);

  const formData = new FormData();


  formData.append("business", business.value);
  formData.append("title", title.value);
  formData.append("description", description.value);
  formData.append("file", file.files[0]);

  fetch("/api/posts", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(response);
      window.location.reload();
     
    })
    .catch((err) => ("Something went wrong", err));
}