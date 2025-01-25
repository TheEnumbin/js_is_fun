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
  
function arrowFunction() {
    this.value = 10;

    setTimeout(() => {
        console.log("Arrow:", this.value);
    }, 1000);
}
  
// Normal function can be called as constructor e.g. with new keyword
new normalFunction();
new arrowFunction();

class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    // Here "this" works because it is getting binded with the object when the object is called.
    start() {
      console.log(`${this.make} ${this.model} started`);
    }

    // Here "This" works becuase it takes the lexical scope
    stopWithArrow = () => {
        this.year = 2004
        console.log(`${this.make} ${this.model} stopped at ${this.year}`)
    }
}

const car1 = new Car("Toyota", "Corolla");
car1.start();
car1.stopWithArrow()

// Here extracting the start function so that it does not get binded to the object. Thus it wont take the lexical "This"
const extractedStart = car1.start;
// extractedStart() //  This will cause error
const boundStart = car1.start.bind(car1) // after binding this will work
boundStart()

// With arrow function no need of binding.
const extractedStop = car1.stopWithArrow
extractedStop()

// *** Rest (...) parameters ***
console.log("*** Rest (...) parameters ***")

function methosWithArgs(a, b) {
    console.log(arguments)
}

methosWithArgs(1, 2, 3)

const arrowWithRest = (...args) => {
    console.log(args); // Array of arguments
  };
  
arrowWithRest(1, 2, 3);

// Arrow function in array related methods
console.log("*** Arrow function in array related methods ***")
const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
console.log(squares);

console.log("* Arrow function with template literals tag function with the reduce method earlier *")

function tagWithArrow(strings, ...values) {
    const processed = strings.reduce((result, str, i) => {
        if (i < values.length) {
            result += str + values[i];
        } else {
            result += str;
        }
    }, "");

    return processed;
}

const PFNtagWithArrow = "Alice";
const PLNtagWithArrow = "Wonderland";
const agetagWithArrow = 25;

const resulttagWithArrow = tag`Hello, ${PFNtagWithArrow} ${PLNtagWithArrow}. You are ${agetagWithArrow} years old.`;
console.log(result);