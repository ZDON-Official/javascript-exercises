const sumAll = function(num1, num2) {
    var sum = 0

    for(var i=num1;i<=num2;i++){
        sum += i
    }

    return sum
};
console.log(sumAll(1,4))
// Do not edit below this line
module.exports = sumAll;
