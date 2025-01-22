console.log(`*************************************************
Arrow Functions Lesson Start
`);
    
// Basic Difference with traditional function
console.log("*** Basic Difference ***")

// Traditional function
console.log(`* Tradiitonal function output *`)
function addTraditional(a, b) {
    return a + b;
}
console.log(addTraditional(10, 10))
  
// Arrow function
console.log(`* Arrow function output *`)
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 5))

// With and without params
console.log("*** With and without params ***")

const withOutParams = () => console.log("Looging from Without Params")
withOutParams();

const withParams = param => console.log(`Logging with param and Passed param is ${param}`) // Paranthesis when single parameter is passed
withParams("Parameter");

console.log("*** Implicit and Explicit Return ***")
// Explicit return
console.log(`* Explicit *`)
const addExplicit = (a, b) => {
    return a + b;
};
console.log(addExplicit(2, 3));
  
// Implicit return
console.log(`* Implicit *`)
const addImplicit = (a, b) => a + b;
console.log(addImplicit(2, 3));

// This value
console.log("*** This value ***")
function normalFunction() {
    this.value = 10;
  
    setTimeout(function () {
      console.log("Normal:", this.value);
    }, 1000);
}
  
function arrayFunction() {
    this.value = 10;

    setTimeout(() => {
        console.log("Arrow:", this.value);
    }, 1000);
}
  
// Normal function can be called as constructor e.g. with new keyword
new normalFunction();
new arrayFunction();