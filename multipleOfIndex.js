// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(arr) {
    let arr1 = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] % i == 0) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  }