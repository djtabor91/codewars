
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    //return dna.replaceAll('T', 'U');
    for(let i = 0; i < dna.length; i++){
      dna = dna.replace('T', 'U');
    }
      

  }

  console.log(DNAtoRNA('TTTT'));