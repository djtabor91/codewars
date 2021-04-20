/*What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

 */

function addLength(str) {
    //start-here
    let newAry = [];
    //let length = str.length;
    let newStr = str.split(' ');
    for(let i = 0; i < newStr.length; i++){
        console.log(newStr[i].length)
        console.log(String(newStr[0] + ' ' + newStr[i].length))
        //console.log(newAry.push(newStr[i].length));
        newAry.push(newStr[i] + ' ' + newStr[i].length)
    }
    return newAry

}

console.log(addLength('apple ban'));
    
//split string into an array
//make new array to store new array with word plus length
//make variable for length property
//loop through array
//add both the length of index plus string together
//push to new array concatinated