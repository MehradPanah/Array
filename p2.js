function concatNarrays(args) {
    args = Array.prototype.slice.call(arguments);
    var newArr = args.reduce( function(prev, next) {
       return prev.concat(next) ;
    });

    return newArr;
}
arr1=[1, 2, 3]
arr2=[5, 2, 1, 4]
arr3=[2,8,9]
console.log(concatNarrays(arr1, arr2, arr3).sort());