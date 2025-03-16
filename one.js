//querySelectorAll('div') returns a NodeList
// NodeList is an array-like object and its static

const veges = document.querySelectorAll("li");

console.log(veges); // NodeList(3) [li, li, li]

veges.forEach((vege) => {
  vege.style.backgroundColor = "green";
});
