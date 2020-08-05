function calculateRectangleArea(length, width){
  let a = length;
  let b = width;

  if (a < 0 || b < 0) {
    return undefined;
  }

  let area = a * b;
  return area;
}

function calculateTriangleArea(base, height){
  let c = base;
  let d = height;

  if (c < 0 || d < 0) {
    return undefined;
  }

  let triArea = (c * d) / 2;
  return triArea;
}

function calculateCircleArea(radius){
  let i = radius;
  let circArea = (i * i) * Math.PI;

  if (i < 0) {
    return undefined;
  }

  return circArea;
}