//image slider

const slides = document.querySelectorAll(".slides img");
let slide_idx = 0;
let interval_id = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider); //prefered way to call a function when the page is loaded

function initializeSlider() {
  slides[slide_idx].classList.add("displaySlide");
}

function showSlide() {}
function NextSlide() {}
function PrevSlide() {}
