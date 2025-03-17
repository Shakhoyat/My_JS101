//step 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

//step 2 ADD attributes/properties to the  CONTENT
newH1.textContent = "I like Pizza";
newH1.id = "pizza";
newH1.style.color = "tomato";
newH1.style.fontSize = "50px";
newH1.style.fontFamily = "Arial";
newH1.style.textAlign = "center";

//step 3 APPEND THE ELEMENT TO THE DOM
document.getElementById("box4").append(newH1);
// document.getElementById("box2").prepend(newH1);
//document.body.appendChild(newH1);
// document.body.prepend(newH1);

// const boxx2 = document.getElementById("box2");
// document.body.insertBefore(newH1, boxx2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[4]);

//remove the element
// document.body.removeChild(boxes[0]);
// document.body.removeChild(newH1);
// document.getElimentById("pizza").removeChild(newH1);
