var my_array = [1, 1, 2, 2, 2,3, 4, 5, 8, 9];
var uniq = my_array.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

console.log(uniq)