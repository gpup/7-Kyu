//Apparently this is what i tried before but it didn't work

function findShort(s){
    //probably need to split words into individual strings
    //filter through words and find shortest string
    let shortest = Math.min(...s.split('').map(word => word.length));
    //join words back to one string? this may be unecessary
    //return the shortest word
    return shortest;
  }