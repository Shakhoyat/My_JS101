const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxGrade = grades.reduce(getMax);

function getMax(max, grade) {
  //ans,single element
  return Math.max(max, grade);
}
console.log(maxGrade);
