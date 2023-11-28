const guideBtn = document.querySelector(".guide-btn");
const guideContent = document.querySelector(".guide__content");
const listItems = document.querySelectorAll(".list-item");
const planPopup = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");
const notificationBell = document.querySelector(".notification-bell");
const container = document.querySelector(".container");
const dropdown = document.querySelector(".profile-dropdown-box");
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

  dropdown.addEventListener("click", () => {
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

////---- CHECKED BUTTON ----/////
let completedCount = 0;
function toggleState(event) {
  const checkButton = event.currentTarget;
  const progressText = document.querySelector(".guide__progress-text");
  const progressBarFill = document.querySelector(".guide__progress-bar-fill");

  if (!checkButton.classList.contains("checked")) {
    // Change to rounded border when hovered
    checkButton.style.borderRadius = "50%";

    // Change to spinner on click
    checkButton.style.backgroundImage =
      'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none"><path d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2" stroke="%238a8a8a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>\')';
    checkButton.style.animation = "spin 2s linear infinite"; // Add rotation animation

    // Simulate async task completion after a delay (you may replace this with your actual asynchronous task)
    setTimeout(() => {
      checkButton.style.backgroundImage =
        "url('https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg')";
      checkButton.style.animation = "none"; // Stop rotation animation

      // If the button hasn't been clicked before, increment completedCount and adjust progress bar
      completedCount++;
      completedCount = Math.min(5, completedCount); // Ensure completedCount doesn't exceed 5
      progressText.textContent = `${completedCount} / 5 completed`;
      progressBarFill.style.width = `${completedCount * 20}%`;
      checkButton.classList.add("checked");
    }, 2000); // 2 seconds delay for demonstration, replace with actual delay
  } else {
    // Reset to initial state
    checkButton.style.borderRadius = "0";
    checkButton.style.backgroundImage =
      'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="%238A8A8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" /></svg>\')';

    // If the button has been clicked before, decrement completedCount and adjust progress bar
    completedCount--;
    completedCount = Math.max(0, completedCount); // Ensure completedCount doesn't go below 0
    progressText.textContent = `${completedCount} / 5 completed`;
    progressBarFill.style.width = `${completedCount * 20}%`;
    checkButton.classList.remove("checked");
    checkButton.classList.remove("checked");
  }
}

// Add the onclick event dynamically to each button
document.querySelectorAll(".check-btn").forEach((button) => {
  button.onclick = toggleState;
});
