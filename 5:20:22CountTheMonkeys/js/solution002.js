//This works. Almost forgot about push(). 

function monkeyCount(n){
    //filter through n, and return all numbers starting at 1, in chronological order
    let count = [];
    for(let i=1; i<n+1; i++){
      count.push(i);
    }
    return count;
  }