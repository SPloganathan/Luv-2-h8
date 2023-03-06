const onLikeDisLikeClickHandler = (event) => {
  let type = event.target.getAttribute("data-post-type");
  let postId = event.target.getAttribute("data-post-id");

  fetch("/api/posts/likeDislike", {
    method: "POST",
    body: JSON.stringify({ type, postId }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        alert(`${type.toUpperCase()} updated`);
        window.location.reload();
      } else {
        alert("Failed to update. Please try again");
      }
    })
    .catch((err) => ("Something went wrong", err));
};

document.querySelectorAll("#post-like").forEach((eachElement) => {
  eachElement.addEventListener("click", onLikeDisLikeClickHandler);
});
