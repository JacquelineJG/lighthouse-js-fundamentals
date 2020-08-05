const howManyHundreds = function (solvedSyrup){ 
  let a = solvedSyrup
  let b = 100
  let i = a / b
  let j = (a % 100) * 0.01
  let h =  i - j
  return (Math.round(h));

}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);