//this isn't working either 

function nbYear(p0, percent, aug, p, i = 1) {  
    let per = percent / 100;
    let model = p0 + p0 * per + aug;
      if(model >= p){
        return i;
      }
  }