//Had to look this one up. Don't love the logic for solving the 7 problem but oh well it's code wars

function racePodium(blocks) {
    let second = Math.ceil(blocks/3);
    let first = second + 1;
    let third = blocks - first - second;
    if(blocks === 7){
      return [2, 4, 1]
    }
    
    return [second, first, third]
  }