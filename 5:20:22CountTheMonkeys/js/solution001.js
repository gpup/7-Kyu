//This doesn't work. I guess you can't run an iterable inside an array functon


function monkeyCount(n){
    let count = 0;
    return n.filter(for(let i = 1; i <= n; i++){
      count++;
    })
    return count;
  }