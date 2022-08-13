const ftoc = function(temp) {
  // [°C] = ([°F] − 32) × 5⁄9
  var ans = 0

  
  ans = temp - 32
  ans *= 5 / 9
  ans = Math.round(ans*10)/10

  return ans
};

const ctof = function(temp) {
  // [°F] = [°C] × 9⁄5 + 32
  var ans = 0


  ans = temp * 9/5
  ans += 32
  ans = Math.round(ans * 10) / 10

  return ans
};

console.log(ftoc(32));
console.log(ctof(73.2));
console.log(ftoc(100));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
