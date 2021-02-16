//reduce class points 
//divide arr by number of indexs to get the average 



function betterThanAverage(classPoints, yourPoints) {
    // Your code 
    let reducer = (acc, currentVal) => acc + currentVal;
    let classTotal = classPoints.reduce(reducer);
    const classMean = Number(classTotal / classPoints.length);
    if(yourPoints > classMean){
        return true 
    } else {
        return false;
    }

  }
  betterThanAverage([1,2,3,4,5], 10);
