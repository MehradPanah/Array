function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
console.log(flatten([[[1, [4,[7]]], 2, 3], [9, 5]])) 