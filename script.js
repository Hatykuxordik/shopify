document.addEventListener("DOMContentLoaded", function () {
  const guideBtn = document.querySelector(".guide-btn");
  const guideContent = document.querySelector(".guide__content");
  const listItems = document.querySelectorAll(".list-item");

  // Open the first list item by default
  listItems[0].classList.add("active");
  const firstHiddenBox = listItems[0].querySelector(".hidden-box");
  firstHiddenBox.style.display = "flex";

  guideBtn.addEventListener("click", function () {
    // Toggle upside-down SVG on button click
    guideBtn.classList.toggle("rotate");

    // Toggle visibility of guide content
    guideContent.classList.toggle("hidden");

    // Close any open list items
    listItems.forEach((item) => {
      item.classList.remove("active");
      const hiddenBox = item.querySelector(".hidden-box");
      hiddenBox.style.display = "none";
    });

    // Open the first list item
    listItems[0].classList.add("active");
    const firstHiddenBox = listItems[0].querySelector(".hidden-box");
    firstHiddenBox.style.display = "flex";
  });

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      listItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const hiddenBox = otherItem.querySelector(".hidden-box");
          hiddenBox.style.display = "none";
        }
      });

      item.classList.add("active");

      const hiddenBox = item.querySelector(".hidden-box");

      if (hiddenBox.style.display === "none") {
        hiddenBox.style.display = "flex";
      } else {
        hiddenBox.style.display = "none";
      }
    });
  });
});
