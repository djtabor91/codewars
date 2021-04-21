/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway */

function noBoringZeros(n) {
    // your code
    if (n === 0) return 0
  const number = String(n)
  let result = number
  for (let i = 0; i < number.length; i++) {
    if (result.endsWith('0')) {
      result = result.substring(0, result.length - 1)
    }
  }
  return Number(result)
}
  
console.log(noBoringZeros(43400000));

//while loop
function noMoreZeros(n){
    while( n % 10 === 0 && n !== 0){
        n = n / 10
    }
    return n
}


//turn number into string
//turn string into array
//split array
//loop through array
//check to see if any index is === to 0
// 