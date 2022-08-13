const ftoc = function(temp) {
  // [°C] = ([°F] − 32) × 5⁄9
  var ans = 0

  
  ans = temp - 32
  ans *= 5 / 9
  
  return ans.toFixed(1)
};

const ctof = function(temp) {
  // [°F] = [°C] × 9⁄5 + 32
  var ans = 0


  ans = temp * 5/9
  ans += 32

  return ans.toFixed(1)
};

console.log(ftoc(32));
console.log(ctof(0));
console.log(ftoc(100));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
