const mybtn = document.getElementById("mybtn");

mybtn.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});
mybtn.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});
