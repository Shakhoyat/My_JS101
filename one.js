const mybtn = document.getElementById("mybtn");

const myh1 = document.getElementById("myh1");

mybtn.classList.add("enabled");
myh1.classList.add("enabled");

myh1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += ":)";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});

mybtn.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += ":)";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
