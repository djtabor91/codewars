/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */

function distinct(a) {
    a = a.filter((e,i) => {
        return a.indexOf(e) == i
    })
    return a
  }

  console.log(distinct([1,1,2]));