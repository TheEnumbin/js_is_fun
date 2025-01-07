let letvar = 1
function check_let() {
    letvar = 2
}
console.log("Before calling function : ")
console.log(letvar)
check_let();
console.log("After calling function : ")
console.log(letvar)