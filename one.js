const mybtn = document.getElementById("mybtn");

mybtn.classList.add("enabled");

mybtn.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += ":)";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
