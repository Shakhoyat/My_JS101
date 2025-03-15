import {
  PI,
  getCircleArea,
  getVolumeOfCylinder,
  getCircleCircumference,
} from "./mathUtils.js";

console.log(PI);
const area = getCircleArea(2);
console.log(area);
const volume = getVolumeOfCylinder(2, 5);
console.log(volume);
const circumference = getCircleCircumference(2);
console.log(circumference);
