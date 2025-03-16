//**************firstelementchild**************

// const fruits = document.getElementById("fruits");

// const firstElementChild = fruits.firstElementChild;

// firstElementChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((element) => {
  const firstChild = element.firstElementChild;
  if (firstChild) {
    firstChild.style.backgroundColor = "green";
  }
});

//************lastelementchild**********

const lastElementChild = fruits.lastElementChild;

lastElementChild.style.backgroundColor = "pink";
