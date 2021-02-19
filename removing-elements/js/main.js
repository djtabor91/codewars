/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.*/
//example
//myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];


arr=[1,2,3,4,5,6,7,8]



//my try
function removeEveryOther(arr){
    //your code here
    let remove = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            arr[i] === remove;
        }
    }
    return arr
  }

  //console.log(removeEveryOther(arr));

// solution

function removeEveryOther(arr){
    for(let i = 1; i < arr.length; i++){
        arr.splice(i,1);
    }
    return arr;
}

console.log(removeEveryOther(arr));
