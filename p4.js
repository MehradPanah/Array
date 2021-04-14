function justNumbers(string) 
{
   var numsStr = string.replace(/[^0-9]/g,'');
   return parseInt(numsStr);
}
my_string="asdbhusd1bviyh2vu3456"
console.log(justNumbers(my_string));