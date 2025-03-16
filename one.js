//getElement by TagName()

const h4Element = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Element);

h4Element[1].style.color = "red";

for (let i = 0; i < h4Element.length; i++) {
  h4Element[i].style.backgroundColor = "yellow";
}

for (let lielement of liElements) {
  lielement.style.backgroundColor = "lightgreen";
}

Array.from(liElements).forEach((element) => {
  element.style.color = "blue";
});
