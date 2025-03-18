//image slider

const slides = document.querySelectorAll(".slides img");
let slide_idx = 0;
let interval_id = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider); //prefered way to call a function when the page is loaded

function initializeSlider() {
  if (slides.length > 0) {
    slides[slide_idx].classList.add("displaySlide");
    interval_id = setInterval(nextSlide, 4000);
  }
  //   console.log(interval_id);
}

function showSlide(idx) {
  if (idx >= slides.length) {
    slide_idx = 0;
  } else if (idx < 0) {
    slide_idx = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slide_idx].classList.add("displaySlide");
}
function nextSlide() {
  slide_idx++;
  showSlide(slide_idx);
}
function prevSlide() {
  clearInterval(interval_id);
  slide_idx--;
  showSlide(slide_idx);
}
