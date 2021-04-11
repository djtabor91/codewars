/*You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle*/

function otherAngle(a, b) {
    let c = 180
    let total = c -a-b;
    return total;
  }

console.log(otherAngle(60,60));
