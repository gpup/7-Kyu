//Holy crap this one worked

function sumTwoSmallestNumbers(numbers) {  
    let ordered = numbers.sort((a, b) => a-b);
    return ordered[0] + ordered[1];
  }