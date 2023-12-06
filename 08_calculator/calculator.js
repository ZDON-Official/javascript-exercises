const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  var sum = 0;
  arr.forEach((e) => {
    sum += e;
  });

  return sum;
};

const multiply = function (arr) {
  var mult = 1;
  arr.forEach((e) => {
    mult *= e;
  });
  return mult;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  var fac = 1;
  for (var i = 1; i <= a; i++) {
    fac *= i;
  }

  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
