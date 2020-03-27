function xo(str) {
    let temporaryX = '';
    let temporaryO = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            temporaryX += str[i]
        } else {
            temporaryO += str[i]
        }
    }    
    return (temporaryO.length === temporaryX.length) ? true : false
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true