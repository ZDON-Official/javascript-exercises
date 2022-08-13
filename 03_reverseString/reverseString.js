const reverseString = function(strings) {
    rev = ''

    var split = strings.split('')
    split = split.reverse()
    rev = split.join('')

    return rev
};

// Do not edit below this line
module.exports = reverseString;
