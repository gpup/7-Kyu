//Ok this definitely isn't going to work

function disemvowel(str) {
    let troll = ""
    for(let i = 0; i < str.length; i++){
      if(i === "a","e","i","o","u"){
        troll.pop(i)
      }
    }
    return troll
  }