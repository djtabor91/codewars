
/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */
function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    if(sonYearsOld * 2 < dadYearsOld){
        return dadYearsOld - sonYearsOld * 2
    }else if(sonYearsOld * 2 > dadYearsOld){
        return sonYearsOld*2 - dadYearsOld
    }else{
        return 0
    }
    

  }

  console.log(twiceAsOld(36,7));
  console.log(twiceAsOld(55,30))
  console.log(twiceAsOld(42,21))