// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    arr = arr.filter(x => x >0)
    return arr.reduce((acc,c)=> acc + c, 0)
  }