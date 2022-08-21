//Trying some PREP stuff oout

function oddOrEven(arr) {
    return arr.reduce((a,c) => a + c, 0) % 2 ? 'odd' : 'even'
    
     //PREP
    //given a list of integers, determine if sum is odd or even
    
    //P - Parameters
    //it's going to be an array of numbers, sometimes empty
    
    //R - Returns
    //"even" or "odd"
    
    //E - Examples
    //[0,1,5] => 'even'
    //[0,1,4] => 'odd'
    //[] => 'even'
    
    //P - Psuedocode
    //take in an array
    //add elements of array
    //check if sum is odd or even
    //return appropriate string
  }