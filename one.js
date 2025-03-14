//filter()=creates a new array by filtering out elements

const words = ["apple", "orangeeeee", "banana", "kiwi"];

function getShortWords(element) {
  return element.length <= 6;
}
const shortwords = words.filter(getShortWords);

console.log(shortwords);
