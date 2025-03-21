console.log(`*************************************************
Default Parameteres Lesson Start
`);

// Basic usage
console.log("*** Basic usage ***")

function basicUsage ($default = 9) {
    if($default == 9) {
        console.log("Default param is " + $default);
    } else  {
        console.log(`Passed param is ${$default}`);
    }
}

console.log("* With default param *")
basicUsage()
console.log("* With passed param *")
basicUsage(10)

// Function as default param
console.log("*** Function as default param ***")

function paramMethod() {
    return 2 + 2;
}

function methodAsDefParam(num = paramMethod()){
    console.log(num)
}
methodAsDefParam()
methodAsDefParam(10)

// Rest paramters as default parameters
console.log("*** Rest paramters as default parameters ***")

function methodWithRestAdDefault(category = 'General', ...rest){
    console.log(`Category: ${category}`)
    console.log(rest)
}
methodWithRestAdDefault()
methodWithRestAdDefault('Fruits', 'Apple', 'Orange', 'Dragon')

// Default parameters with destructuring
console.log("*** Default parameters with destructuring ***")

function methodDestructureDefault({name = 'Enam', age = "28"} = {}){
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
}
methodDestructureDefault()
methodDestructureDefault({name: 'Ifty', age: "25"})


// Use parameter for other paramter calculation
console.log("*** Use parameter for other paramter calculation ***")

function methodParamForParam(price, tax_amount, total_tax = price + tax_amount){
    console.log(`Price: ${price}`)
    console.log(`Tax Amount: ${tax_amount}`)
    console.log(`Total Tax: ${total_tax}`)
}

console.log("*** With Default Param ***")
methodParamForParam(10, 5)

console.log("*** With Sent Param ***")
methodParamForParam(10, 5, 20)

