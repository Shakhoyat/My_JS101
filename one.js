// map()=accepts a callback function and returns a new array
// with the result of the callback function applied to each element
// of the original array

const dates = ["2024-1-10", "2023-04-19", "2002-03-01"];

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);

console.log(formattedDates);
