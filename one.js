//step 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

//step 2 ADD attributes/properties to the  CONTENT
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.backgroundColor = "lightgreen";
newListItem.style.fontSize = "20px";
newListItem.style.fontWeight = "bold";

//step 3 APPEND THE ELEMENT TO THE DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").prepend(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

//remove the element
