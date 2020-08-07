function range(start, end, step){

  let array = [];

  for (let i = start ; i <= end ; i = i + step){
    if ((end > start) && (step > 0)){
      array.push(i);
    } else {
      break;
    }
  } return array;
}