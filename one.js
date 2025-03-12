const textBox = document.getElementById("textbox");
const tocelsius = document.getElementById("tocelsius");
const toFarenheit = document.getElementById("toFarenheit");
const result = document.getElementById("result");
// const textBox = document.getElementById("textbox");

let temp;

function convert() {
  if (tocelsius.checked) {
    temp = Number(textBox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(2) + ` Celsius`;
  } else if (toFarenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(2) + ` Farenheit`;
  } else {
    result.textContent = "Please select a conversion type";
  }
}
