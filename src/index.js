
exports.min = function min (array) {
  if(arguments.length == 0 || array.length == 0) {
    return 0;
  }
  let minNum = array[0];
  for(let i = 0;i < array.length;i++) {
    if(array[i] < minNum) {
      minNum = array[i];
    }
  }
  return minNum;
}

exports.max = function max (array) {
  if(arguments.length == 0 || array.length == 0) {
    return 0;
  }
  let minNum = array[0];
  for(let i = 0;i < array.length;i++) {
    if(array[i] > minNum) {
      minNum = array[i];
    }
  }
  return minNum;
  
}

exports.avg = function avg (array) {
  
  if(arguments.length == 0 || array.length == 0) {
    return 0;
  }
  let minNum = 0;
  for(let i = 0;i < array.length;i++) {
    
      minNum = minNum + array[i];
    
  }
  return minNum / array.length;
  
}
