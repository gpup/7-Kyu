//This is more close to what i was trying to do. I think i could have gotten here given a little more time.

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

//the Number() wrapper seemed unecessary. 