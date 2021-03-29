/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

function isVow(a){
   
   let vow = {
       97: 'a',
       101: 'e',
       105: 'i',
       111: 'o',
       117: 'u'
   } 
   return a.map( v =>{
       if(v in vow){
           return vow[v]
       }else {
           return v;
       }
   })
    
}

console.log(isVow([101,121,110,113,113,103,121,121,101,107,103,97]));


//isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103])