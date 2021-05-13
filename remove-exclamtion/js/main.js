/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
    while(s[s.length - 1] === '!'){
        s = s.slice(0,-1)
    }
    return s
  }

  console.log(removeExclamationMarks('Hello World!'))