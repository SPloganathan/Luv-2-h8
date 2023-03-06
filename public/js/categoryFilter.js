const onChangeListener = (event) => {
  if (!event.target.tagName.toUpperCase() == "INPUT") {
    return;
  }
  let checkedBusiness = [];
  let categoryId = "";
  document.querySelectorAll("#business-id").forEach((inputElement) => {
    categoryId = inputElement.getAttribute("data-category-id");
    if (inputElement.checked) {
      const id = inputElement.getAttribute("data-id");
      checkedBusiness.push(id);
    }
  });
  if (checkedBusiness.length) {
    document.location.replace(
      `/categoryPosts/${categoryId}?business=${checkedBusiness.join(",")}`
    );
  } else {
    document.location.replace(`/categoryPosts/${categoryId}`);
  }
};

document
  .querySelector("#card-filter")
  .addEventListener("click", onChangeListener);
