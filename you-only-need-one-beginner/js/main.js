/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
    // your code here
    /*let sameNum = a.find = e => e === x;
    return true*/
    let findVal = a.includes(x);
    if(findVal){
      return true
    }else{
      return false
    }
    
    
  }

  console.log(check([1,2,3,4,5], 4));