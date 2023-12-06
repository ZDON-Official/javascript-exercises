const fibonacci = function (n) {
  var list = [1, 1];

  if (Math.sign(n) === -1) {
    return "OOPS";
  }

  for (var i = 2; i < n; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }

  return list[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;

// console.log(fibonacci(6));
