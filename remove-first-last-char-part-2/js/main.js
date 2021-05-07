/*This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value. */

function array(arr){
    //Good luck
   /* arr = arr.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(arr === ['']){
            return null 
        }
    }
    return arr.join('')
    
 }*/

 return arr.split(',').slice(1,-1).join(' ') || null
}

console.log(array('1,2,3'))
//loop through array
 //check to see if arr is null
//