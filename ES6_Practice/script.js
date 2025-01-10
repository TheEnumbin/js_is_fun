// Example of hoisting: Wont give error if declared later. Show undefined
console.log("************ Var variable *********")
console.log("Before declaration : ")
console.log(var_variable)

var var_variable = 1
function check_var() {
    var_variable = 2
    var var_variable_2 = 3
    console.log("Block scoped variable 2")
    console.log(var_variable_2)
}

console.log("Before calling function : ")
console.log(var_variable)

// Below two lines will show reference error since block scoped
// console.log("Variable 2 initialized in function : ")
// console.log(var_variable_2)

check_var();

console.log("After calling function : ")
console.log(var_variable)

// ****************************************************

console.log("************ Let variable *********")
console.log("Before declaration : ")

// console.log(let_variable) // Let is hoisted but will show reference error because it is not initialized

let let_variable = 1
function check_let() {
    let_variable = 2
    let let_variable_2 = 3
    console.log("Block scoped variable 2")
    console.log(let_variable_2)
}

// Below two lines will show reference error since block scoped
// console.log("Variable 2 initialized in function (block scoped) : ")
// console.log(let_variable_2)

console.log("Before calling function : ")
console.log(let_variable)

check_let();

console.log("After calling function : ")
console.log(let_variable)

// Block scope for let

function example() {
  if (true) {
    let x = 10; // Block-scoped
    console.log(x); // Output: 10
  }
  console.log(x); // ReferenceError: x is not defined
}
example();


// ****************************************************

console.log("************ Const variable *********")
console.log("Before declaration : ")

console.log(value)

const value = 42;
value = 50; // TypeError: Assignment to constant variable