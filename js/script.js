// js/script.js
// Image Slider
let current = 0;
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
setInterval(() => {
  const slider = document.getElementById("slider");
  if (slider) {
    slider.src = images[current];
    current = (current + 1) % images.length;
  }
}, 3000);

// Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
}

