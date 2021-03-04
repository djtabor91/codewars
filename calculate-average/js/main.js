/*Write a function which calculates the average of the numbers in a given list.*/

function find_average(array) {
    //add all parts of the array together
    let newArr = array.reduce((acc,c) => acc + c, 0);
    return newArr / array.length
  }

console.log(find_average([1,2,3,4]))