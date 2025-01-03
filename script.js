// Function to toggle the menu (existing functionality)
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Auto-Slideshow Script
document.addEventListener("DOMContentLoaded", function () {
  // Select all slideshow images
  const images = document.querySelectorAll(".slideshow-image");
  let currentIndex = 0;

  // Function to show the next image
  function showNextImage() {
    // Hide the current image
    images[currentIndex].style.opacity = "0";

    // Update index
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].style.opacity = "1";
  }

  // Change image every 3 seconds
  setInterval(showNextImage, 3000);
});
