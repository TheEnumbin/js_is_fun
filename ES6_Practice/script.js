// Example of hoisting: Wont give error if declared later. Show undefined
console.log("Before declaration : ")
console.log(var_variable)

var var_variable = 1
function check_let() {
    var_variable = 2
}

console.log("Before calling function : ")
console.log(var_variable)

check_let();

console.log("After calling function : ")
console.log(var_variable)