const guideBtn = document.querySelector(".guide-btn");
const guideContent = document.querySelector(".guide__content");
const listItems = document.querySelectorAll(".list-item");
const planPopup = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");
const notificationBell = document.querySelector(".notification-bell");
const container = document.querySelector(".container");
const dropperBox = document.querySelector(".profile-dropdown-box");
const profilePopup = document.querySelector(".profile-popup");

document.addEventListener("DOMContentLoaded", function () {
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
      // Check if the clicked item is already active
      const isActive = item.classList.contains("active");

      listItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const hiddenBox = otherItem.querySelector(".hidden-box");
          hiddenBox.style.display = "none";
        }
      });

      // If the clicked item is not already active, make it active and show the hidden box
      if (!isActive) {
        item.classList.add("active");
        const hiddenBox = item.querySelector(".hidden-box");
        hiddenBox.style.display = "flex";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    planPopup.style.visibility = "hidden";
  });

  notificationBell.addEventListener("click", () => {
    popup.classList.toggle("visible");

    if (profilePopup.classList.contains("visible")) {
      profilePopup.classList.remove("visible");
    }
  });

  dropperBox.addEventListener("click", () => {
    profilePopup.classList.toggle("visible");

    if (popup.classList.contains("visible")) {
      popup.classList.remove("visible");
    }
  });

  container.addEventListener("click", function (event) {
    if (popup.classList.contains("visible") && event.target === container) {
      popup.classList.remove("visible");
    }

    if (
      profilePopup.classList.contains("visible") &&
      event.target === container
    ) {
      profilePopup.classList.remove("visible");
    }
  });
});
