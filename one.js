//filter()=creates a new array by filtering out elements

const ages = [15, 17, 16, 19, 22, 24];

function adultschecker(age) {
  return age >= 18;
}

const adults = ages.filter(adultschecker);
console.log(adults);
