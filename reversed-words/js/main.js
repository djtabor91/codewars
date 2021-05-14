/*Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> " */

function reverseWords(str){
    str = str.split(' ').reverse().join(' ')
    return str; // reverse those words
  }


  console.log(reverseWords('Complete the solution so that it reverses all of the words within the string passed in.'))