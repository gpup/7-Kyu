//I didnt really know where to start on this one, but here is a solution which makes sense

function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) ? s.charAt(Math.floor(middle)) : s.slice(middle - 1, middle + 1);
  }