const isEven  = function (num) {
  return num % 2 === 0;
}
//function return values don't need to be reset to new variables like below
//const tenIsEven = isEven(10);
//const elevenIsEven = isEven(11);

console.log(isEven(10));
console.log(isEven(11));