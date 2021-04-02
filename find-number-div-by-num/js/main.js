/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

 */
function divisibleBy(numbers, divisor){
    return numbers.filter(function(number) {
       if(number % divisor === 0){
           return number
       }
    })
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))