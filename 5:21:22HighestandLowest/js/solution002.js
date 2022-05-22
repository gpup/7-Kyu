//This worked

function highAndLow(numbers){
    numbers=numbers.slpit(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//The Number() wrapper function in this context is a little over my head. Not sure I understand how this is working.