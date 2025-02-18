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

// Function ad default param
console.log("*** Function ad default param ***")

function paramMethod(number) {
    return number + 2;
}

function methodAsDefParam(num = paramMethod(num)){
    console.log(num)
}

methodAsDefParam(10)