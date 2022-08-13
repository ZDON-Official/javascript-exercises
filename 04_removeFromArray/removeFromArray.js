const removeFromArray = function(list, ...arg) {
    
    while(arg.length != 0){
        for(var i=0;i<list.length;i++){
            if(list[i] === arg[0]){
               list.splice(i, 1) 
            }
        }
        arg.shift()
    }

    return list
};

var ans = removeFromArray([1,2,3,4],3,2)
console.log(ans);



// Do not edit below this line
module.exports = removeFromArray;
