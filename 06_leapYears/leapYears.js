const leapYears = function(year) {

    if(year % 4 === 0){
        // Is a leap year
        //console.log("true");
        if (year % 100 != 0){
            return true
        }
        if (year % 400 === 0 && (year % 100 === 0)){
            //console.log("leap");
            return true
        }
    }



    return false
};

var ans = leapYears(1996)
console.log(ans);
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
