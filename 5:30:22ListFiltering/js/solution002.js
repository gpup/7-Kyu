//Apparently this is a thing you can do? Gonna look into the typeof operator

function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }