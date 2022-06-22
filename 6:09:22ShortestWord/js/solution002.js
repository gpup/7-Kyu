//Wow, literally just added a space to the .split(''), and returned it since it was not implicit

function findShort(s){
    return Math.min(...s.split(' ').map(word => word.length));
  }