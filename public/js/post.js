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
