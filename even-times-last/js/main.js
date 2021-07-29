/*Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0. */

function evenLast(numbers) {
    // Good luck
    let last = numbers[numbers.length -1]
    let sum = 0;
    if(numbers.length == 0) return 0
    for(let i = 0; i < numbers.length; i++){
        if( i % 2 == 0){
            sum += numbers[i]
        }
    }
    return sum * last
}

console.log(evenLast([2, 3, 4, 5]))
console.log(evenLast([2, 2, 2, 2]))




















