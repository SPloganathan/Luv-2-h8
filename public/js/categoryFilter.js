const onChangeListener = (event) => {
  if (!event.target.tagName.toUpperCase() == "INPUT") {
    return;
  }
  let checkedBusiness = [];
  let categoryId = "";
  document.querySelectorAll("#business-id").forEach((inputElement) => {
    if (inputElement.checked) {
      const id = inputElement.getAttribute("data-id");
      categoryId = inputElement.getAttribute("data-category-id");
      checkedBusiness.push(id);
    }
  });
  if (checkedBusiness.length) {
    document.location.replace(
      `/categoryPosts/${categoryId}?business=${checkedBusiness.join(",")}`
    );
  }
};

document
  .querySelector("#card-filter")
  .addEventListener("click", onChangeListener);
