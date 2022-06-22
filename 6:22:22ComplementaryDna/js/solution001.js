//So apparently you can make pairs like this. I had no idea. Will look into it

let pairs = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};

function DNAStrand(dna){
  return dna.split('').map(v => { return pairs[v] }).join('');
}