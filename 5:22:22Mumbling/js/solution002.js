//Ok a lot simpler than i though, but wtf

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

  
//Defintely remember this .repeat() business, I have a feeling it will come in very handy during 7Kyu.