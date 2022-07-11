//Tried something like this, but no luck

function sumTwoSmallestNumbers(numbers) {  
    let target = Math.min(numbers);
    let next = numbers.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
    return target + next;
  }