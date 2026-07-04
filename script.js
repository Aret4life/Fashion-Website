// Simple image slider effect
let current = 0;
const images = document.querySelectorAll('.slider img');

function showNextImage() {
  images[current].style.display = 'none';
  current = (current + 1) % images.length;
  images[current].style.display = 'block';
}

// Start slider
images.forEach(img => img.style.display = 'none');
images[0].style.display = 'block';
setInterval(showNextImage, 3000);
<div class="slider">
  <img src="images/dress1.jpg" alt="Dress">
  <img src="images/streetwear1.png" alt="Streetwear">
  <img src="images/vintage1.jpg" alt="Vintage">
</div>
<button onclick="showNextImage()">Next</button>
<button onclick="changeTheme()">Change Theme</button>
function changeTheme() {
  document.body.style.background = 
    document.body.style.background === "white" ? "lightpink" : "white";
}
