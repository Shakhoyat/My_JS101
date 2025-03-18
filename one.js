//image slider

const slides = document.querySelectorAll(".slides img");
let slide_idx = 0;
let interval_id = null;

initializeSlider();

function initializeSlider() {
  slides[slide_idx].classList.add("displaySlide");
}

function showSlide() {}
function NextSlide() {}
function PrevSlide() {}
