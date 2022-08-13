const sumAll = function(num1, num2) {
    var sum = 0
    
    if(num1 < 0 || num2 < 0){ return 'ERROR'}
    if(Number.isInteger(num1) && Number.isInteger(num2)){ 
        temp = num1
        num1 = Math.min(num1, num2)
        num2 = Math.max(temp, num2)
        
        for(var i=num1;i<=num2;i++){
            sum += i
        }
        
    } else{
        return 'ERROR'
    }
    return sum
};
console.log(sumAll(123,1))
// Do not edit below this line
module.exports = sumAll;
