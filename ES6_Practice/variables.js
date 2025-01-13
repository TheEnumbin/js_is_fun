
console.log(`*************************************************
Variable Lesson Start
`);

// Example of hoisting: Wont give error if declared later. Show undefined

console.log("*** Var variable ***")
console.log("Before declaration : ")
console.log(var_variable)

var var_variable = 1
function check_var() {
    var_variable = 2
    if (var_variable == 2) {
        var var_variable_2 = 3
    }
    console.log("Function scoped scoped variable 2")
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

console.log("*** Let variable ***")
console.log("Before declaration : ")

// console.log(let_variable) // Let is hoisted but will show reference error because it is not initialized

let let_variable = 1
function check_let() {
    let_variable = 2
    let let_variable_2 = 3
    console.log("Block scoped variable 2")
    console.log(let_variable_2)

    if (true) {
        let x = 10; // Block-scoped
        console.log(x); // Output: 10
      }
    // Below code will show error since let is block scoped and x is defined in if block.
    // console.log(x); // ReferenceError: x is not defined
}

// Below two lines will show reference error since block scoped
// console.log("Variable 2 initialized in function (block scoped) : ")
// console.log(let_variable_2)

console.log("Before calling function : ")
console.log(let_variable)

check_let();

console.log("After calling function : ")
console.log(let_variable)


// ****************************************************

console.log("*** Const variable ***")
console.log("Before declaration : ")

// console.log(const_value) // Hoisted for const but in Temporal Dead Zone so it will show refrence error

const const_value = 42;
// const_value = 50; // TypeError: Assignment to constant variable

const const_obj = { name: "Alice" };
const_obj.name = "Bob"; // Valid
console.log(const_obj.name); // Output: Bob

console.log(` 
Variable Lesson End
*************************************************
`);