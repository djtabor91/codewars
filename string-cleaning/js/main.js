/*Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:

stringClean('! !') == '! !'
stringClean('123456789') == ''
stringClean('This looks5 grea8t!') == 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact. */

function stringClean(s){
    // Function will return the cleaned string
    let finalString = [];
    let splitString = s.split('');
    for(i = 0; i < splitString.length; i++){
        if(splitString[i] === ' '){
            finalString.push(splitString[i])
        }else if(isNaN(splitString[i]) === true){
            finalString.push(splitString[i])
        }
    }
return finalString.join('')
    
}
console.log(stringClean('This looks5 grea8t!'))