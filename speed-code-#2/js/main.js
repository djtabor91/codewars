/*SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3 */


function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    return a.reduce((a,c) => a + c ** 2, 0) > b.reduce((a,c) => a+ c ** 3,0);

  }

  
  console.log(arrayMadness([4,5,6],[1,2,3]));



  /*let sumArr1 = 0;

    for(let i = 0; i <= a.length; i++){
        sumArr1 = a[i] ** 2
    };
    

    let sumArr2 = 0;

    for(let i = 0; i <= b.length; i ++){
        sumArr2 = b[i] ** 3
    }
    

    if(sumArr1 >= sumArr2){
        return true
    }else{
        return false
    } */