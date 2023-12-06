const palindromes = function (str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   console.log(str);
  return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

// console.log(palindromes("Racecar!"))
