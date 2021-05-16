/*Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> []; */

function first(arr, n) {
    
    if(n == 0){
        return []
    }else if(n){
        for(let i = 0; i < arr.length; i++){
            return arr.slice(0,n);
        }
    }else{
        return arr.slice(0,1)
    }
}
    
console.log(first(['a', 'b', 'c', 'd', 'e'], 0))
console.log(first(['a', 'b', 'c', 'd', 'e'], 2))
console.log(first(['a','b','c','d']));