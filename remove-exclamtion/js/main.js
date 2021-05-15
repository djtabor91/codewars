/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

/*function removeExclamationMarks(s) {
    /*while(s[s.length - 1] === '!'){
        s = s.slice(0,-1)
    }
    return s*/
    /*for(let i = 0; i < s.length; i++){
        let strAry = s.split('')
        if(strAry[i] == '!'){
            strAry.filter('!');
            return strAry
        }
        
    }*/
    /*s = s.split('');
    s = s.filter(e => e !== '!')
    s= s.join('')
    s= s.split('').filter(e => e !== '!').join('')
    return s
  }

  console.log(removeExclamationMarks('Hello! World!'))*/

  function removeExclamationMarks(s){
    s= s.split('').filter(e => e !== '!').join('')
    return s
  }

  console.log(removeExclamationMarks('Hello! World!'))
