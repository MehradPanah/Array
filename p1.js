function removeItem(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  my_array=[1,2,3,4,5,6]
  console.log(removeItem(my_array, 5))