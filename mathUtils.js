export const PI = 3.14;

export function getCircleArea(radius) {
  return PI * radius * radius;
}

export function getCircleCircumference(radius) {
  return 2 * PI * radius;
}

export function getVolumeOfCylinder(radius, height) {
  return getCircleArea(radius) * height;
}
