//This works, but not sure I actually understand it

function disemvowel(str) {
    let vowels = "aeiou";
    return str.split('').filter(troll => !vowels.includes(troll.toLowerCase())).join('');
  }