//I think this is what I was trying to get at

function getCount(str){
    let vowelsCount = 0;
    let vowels = ["a","e","i","o","u"];
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j < vowels.length; j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    return vowelsCount;
  }
