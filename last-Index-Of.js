var lastIndexOf = function (array, value) {
  for (let i = array.length - 1 ; i >= 0 ; i--){
    if (value === array[i]){
      return i;
    }
  }return -1;
};